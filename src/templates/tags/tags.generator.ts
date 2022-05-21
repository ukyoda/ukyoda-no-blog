import * as path from 'path'

import { CreatePagesArgs } from 'gatsby'

import { generateBlogUrl, generateTagUrl } from '../../utils/generateBlogUrl'

// TODO: ここ、もう少し良い型定義考えたい
type AllContentfulBlogPost = {
  allContentfulTag: {
    nodes?: {
      id: string
      name: string
    }[]
  }
}

export const generateTags = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs): Promise<void> => {
  const { createPage } = actions

  const template = path.resolve(__dirname, './tag.tsx')

  const result = await graphql<AllContentfulBlogPost>(`
    query MyPostsByTag {
      allContentfulTag {
        nodes {
          id
          name
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful tags`,
      result.errors
    )
    return
  }
  const tags = result?.data?.allContentfulTag.nodes

  if (tags) {
    tags.forEach((tag, index) => {
      console.log(tag, generateTagUrl(tag.name))
      createPage({
        path: generateTagUrl(tag.name),
        component: template,
        context: {
          tagId: tag.id,
        },
      })
    })
  }
}
