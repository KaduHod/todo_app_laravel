import {
    defineConfig
} from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react"

export default defineConfig({
    server: {
        host: '0.0.0.0',
        cors: true,
        port: 5173
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true
            //refresh: [`resources/views/**/*`],
        }),
        react(),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        }
    },
});
