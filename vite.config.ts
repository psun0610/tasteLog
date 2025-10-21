import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
              @use "@/assets/styles/globals.scss" as *;
              @use "@/assets/styles/mixins.scss" as *;
              @use "@/assets/styles/variables.scss" as *;
            `,
            },
        },
    },
})
