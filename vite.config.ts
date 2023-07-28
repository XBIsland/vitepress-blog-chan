import { defineConfig } from 'vite'
import VueMacros from 'unplugin-vue-macros/vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  server: {
    open: false
  },
  plugins: [VueMacros(), UnoCSS()]
})
