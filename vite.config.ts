import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts';
import svgLoader from 'vite-svg-loader'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({insertTypesEntry: true, tsconfigPath: 'tsconfig.build.json'}),
    svgLoader()
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
