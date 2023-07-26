// https://vitepress.dev/guide/custom-theme
// import { h } from 'vue'
import Theme from 'vitepress/theme'
import MyLayout from '../../src/components/MyLayout/index.vue'
import './style.css'

export default {
  extends: Theme,
  // Layout: () => {
  //   return h(Theme.Layout, null, {
  //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
  //   })
  // },
  // Layout: Theme.Layout,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
