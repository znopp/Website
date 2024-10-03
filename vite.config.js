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
        outDir: '../dist',
        rollupOptions: {
            input: input,
        },
    },
    server: {
        open: '/index.html',
    },
});