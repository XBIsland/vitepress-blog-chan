import { DefaultTheme, defineConfigWithTheme, defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<DefaultTheme.Config | any>({
  title: ' Chan',
  description: '前端博客，Front-end Programmer Blog',
  themeConfig: {
    ...frontmatter(),
    posts: await getPosts(),
    nav: [
      { text: '🏡Blogs', link: '/' },
      { text: '🚀Archives', link: '/pages/archives' },
      { text: '🏷️Tags', link: '/pages/tags' },
      { text: '🐕About', link: '/pages/about' }
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
