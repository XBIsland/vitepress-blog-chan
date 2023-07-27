// https://vitepress.dev/guide/custom-theme

import Theme from 'vitepress/theme'
import MyLayout from '../../components/MyLayout/index.vue'
import Tags from '../../components/Tags.vue'
import Archives from '../../components/Archives.vue'
import About from '../../components/About.vue'
import './custom.css'

export default {
  extends: Theme,

  Layout: MyLayout,
  enhanceApp(ctx) {
    Theme.enhanceApp(ctx)
    const { app } = ctx
    // register global components

    app.component('Tags', Tags)
    app.component('Archives', Archives)
    app.component('About', About)
  }
}
