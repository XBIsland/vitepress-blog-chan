import matter from 'gray-matter'
import fs from 'fs-extra'
import { globby } from 'globby'
import dayjs from 'dayjs'

export async function getPosts() {
  let paths = await globby(['posts/**.md'], {
    ignore: ['node_modules', 'README.md']
  })

  let posts = await Promise.all(
    paths.map(async path => {
      const content = await fs.readFile(path, 'utf-8')
      const { data } = matter(content)
      data.date = dayjs(data.date).format('YYYY-MM-DD')

      return {
        frontMatter: data,
        regularPath: `/${path}`
      }
    })
  )

  posts.sort(_compareDate)
  return posts
}

function _compareDate(obj1, obj2) {
  return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1
}
