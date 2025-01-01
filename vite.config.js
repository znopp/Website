import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Get all HTML files in the src directory
const htmlFiles = fs.readdirSync('src').filter(file => file.endsWith('.html'));

// Create input object for all HTML files
const input = Object.fromEntries(
    htmlFiles.map(file => [file.replace('.html', ''), resolve(__dirname, 'src', file)])
);

export default defineConfig({
    root: 'src',
    base: './', // Ensures relative paths in production
    build: {
        outDir: '../dist',
        rollupOptions: {
            input,
            output: {
                // Define paths for specific asset types
                assetFileNames: (assetInfo) => {
                    const ext = assetInfo.name.split('.').pop(); // Get file extension
                    if (ext === 'css') return 'assets/css/[name][extname]';
                    if (ext === 'js') return 'assets/js/[name][extname]';
                    if (['png', 'jpg', 'jpeg', 'svg', 'gif', 'webp', 'ico'].includes(ext)) {
                        return 'assets/images/[name][extname]';
                    }
                    if (['ttf', 'woff', 'woff2', 'eot'].includes(ext)) {
                        return 'assets/fonts/[name][extname]';
                    }
                    return 'assets/[name][extname]'; // Fallback
                },
                // Define paths for JavaScript chunks
                chunkFileNames: 'assets/js/modules/[name].js',
                entryFileNames: 'assets/js/[name].js',
            },
        },
    },
    server: {
        open: '/index.html',
    },
});
