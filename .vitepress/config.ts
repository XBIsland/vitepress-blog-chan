import { DefaultTheme, defineConfigWithTheme } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<DefaultTheme.Config | any>({
  title: ' Chan',
  description: '个人记录2',
  srcDir: 'posts', // 指定文章目录
  themeConfig: {
    ...frontmatter(),

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/XBIsland' }],

    search: {
      provider: 'local'
    }
  }
})

function frontmatter() {
  return {
    outline: 'deep',
    editLink: false
  }
}
