import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts';
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),vueJsx(),
    dts({insertTypesEntry: true, tsconfigPath: 'tsconfig.build.json'})
  ],
  resolve: {
    alias: [
      {
        find: '@lib',
        replacement: resolve(__dirname, './lib')
      },
      {
        find: '@lib/',
        replacement: resolve(__dirname, './lib/')
      },
    ]
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'index',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
