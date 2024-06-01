import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        lib: {
            entry: './src/index.ts',
            name: 'DialogPluginVue',
            fileName: (format) => `dialog-plugin-vue.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                },
                assetFileNames: (assetInfo: any) => {
                    if (assetInfo.name === 'style.css') return 'dialog-plugin-vue.css';
                    return assetInfo.name;
                }
            }
        }
    }
});
