import { fileURLToPath, URL } from 'node:url'

import Uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import type { ProxyOptions } from 'vite'
import { defineConfig, loadEnv } from 'vite'
// import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_PORT, VITE_MANAGE_CENTER_API_URL, VITE_MES_API_URL, VITE_DEVICE_API_URL } =
    env as ImportMetaEnv

  const port = parseInt(VITE_PORT, 10) || 3000
  const proxy: Record<string, string | ProxyOptions> = {
    '/manage-center-api': {
      target: VITE_MANAGE_CENTER_API_URL,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/manage-center-api/, '')
    },
    '/mes-api': {
      target: VITE_MES_API_URL,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/mes-api/, '')
    },
    '/device-api': {
      target: VITE_DEVICE_API_URL,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/device-api/, '')
    }
  }

  return {
    plugins: [
      Uni(),
      AutoImport({
        dts: true,
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/,
          /\.vue\?mpType/, // .vue
          /\.md$/ // .md
        ],
        imports: [
          'vue',
          'uni-app',
          'pinia',
          {
            from: '@/constants',
            imports: ['GlobalEnvConfig', 'BasePageModel']
          }
        ],
        dirs: ['src/api', 'src/config', 'src/store', 'src/utils']
      })
      // VueDevTools()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    },
    esbuild: {
      drop: mode === 'production' ? ['console', 'debugger'] : []
    },
    server: {
      host: true,
      port,
      strictPort: true,
      open: false,
      proxy
    },
    preview: {
      host: true,
      port,
      strictPort: true,
      open: false,
      proxy
    }
  }
})
