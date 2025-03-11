import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          //允许s-开头的自定义组件
          isCustomElement: (tag) => tag.startsWith('s-')
        }
      }
    }),
  ],
  server:{
    allowedHosts:true,
    host:true
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
