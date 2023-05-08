import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            injectRegister: 'inline',
            // includeAssets: [
            //     'favicon.ico',
            //     'favicon-32x32.png',
            //     'favicon-16x16.png',
            //     'apple-touch-icon.png',
            //     'screenshot.png',
            // ],
            manifest: {
                name: 'My App',
                short_name: 'My App',
                description: 'My description',
                theme_color: '#ffffff',
                background_color: '#ffffff',
                orientation: 'portrait',
                // icons: [
                //     {
                //         src: 'pwa-192x192.png',
                //         sizes: '192x192',
                //         type: 'image/png',
                //     },
                //     {
                //         src: 'pwa-512x512.png',
                //         sizes: '512x512',
                //         type: 'image/png',
                //     },
                //     {
                //         src: 'maskable_icon_x512.png',
                //         sizes: '512x512',
                //         type: 'image/png',
                //         purpose: 'maskable',
                //     },
                // ],
                // screenshots: [
                //     {
                //         src: 'screenshot.png',
                //         sizes: '750x1334',
                //         type: 'image/png',
                //         platform: 'narrow',
                //         label: 'My App being used',
                //     },
                // ],
            },
        }),
    ],
})
