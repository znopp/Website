import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Automatically find all HTML files in src
const htmlFiles = fs.readdirSync('src').filter(file => file.endsWith('.html'));
const input = Object.fromEntries(
    htmlFiles.map(file => [file.replace('.html', ''), resolve(__dirname, 'src', file)])
);

export default defineConfig({
    root: 'src',
    base: './', // ensures relative paths for all assets
    build: {
        outDir: '../dist/src',
        rollupOptions: {
            input, // all HTML files as entry points
        },
        emptyOutDir: true, // clears previous build
    },
    server: {
        open: '/index.html', // auto-open index on dev
    }
});
