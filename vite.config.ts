import { defineConfig } from 'vite'
import VueMacros from 'unplugin-vue-macros/vite'

export default defineConfig({
  server: {
    open: false
  },
  plugins: [VueMacros()]
})
