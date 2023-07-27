type Post = {
  frontMatter: {
    date?: string
    title?: string
    tags?: string[]
    description?: string
  }
  regularPath: string
}

export function useYearSort(post: Post[]) {
  const data: any[] = []
  let year = '0'
  let num = -1
  for (let index = 0; index < post.length; index++) {
    const element = post[index]
    if (element.frontMatter.date) {
      const y = element.frontMatter.date.split('-')[0]
      if (y === year) {
        data[num].push(element)
      } else {
        num++
        data[num] = []
        data[num].push(element)
        year = y
      }
    }
  }
  return data
}
