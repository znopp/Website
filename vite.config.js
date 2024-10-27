// vite.config.js
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
    build: {
        outDir: 'dist/src',
        rollupOptions: {
            input,
            output: {
                // Place all assets in subfolders under "assets/"
                assetFileNames: (assetInfo) => {
                    // Generalize by preserving the subfolder structure in assets/
                    const ext = assetInfo.name.split('.').pop();  // Get file extension

                    if (ext === 'css') {
                        return 'assets/css/[name][extname]';
                    }
                    if (ext === "js") {
                        return 'assets/js/[name][extname]';
                    }
                    if (['ttf', 'woff', 'woff2', 'eot', 'otf'].includes(ext)) {
                        return 'assets/fonts/[name][extname]';
                    }
                    if (['png', 'jpg', 'jpeg', 'svg', 'gif', 'webp', 'ico'].includes(ext)) {
                        return 'assets/images/[name][extname]';
                    }
                    // Fallback for anything else
                    return 'assets/[name][extname]';
                },
                chunkFileNames: 'assets/js/[name].js',
                entryFileNames: 'assets/js/[name].js',
            },
        },
    },
    server: {
        open: '/index.html',
    },
});