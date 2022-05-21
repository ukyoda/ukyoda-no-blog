import * as path from 'path'

import { CreatePagesArgs } from 'gatsby'

import { generateBlogUrl } from '../../utils/generateBlogUrl'

// TODO: ここ、もう少し良い型定義考えたい
type AllContentfulBlogPost = {
  allContentfulMyPost: {
    nodes: {
      title: string
      slug: string
    }[]
  }
}

export const generateMyPost = async ({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs): Promise<void> => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(__dirname, './my-post.tsx')
  const result = await graphql<AllContentfulBlogPost>(`
    {
      allContentfulMyPost(sort: { order: DESC, fields: createdAt }) {
        nodes {
          title
          slug
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
  if (typeof result.data === 'undefined') {
    reporter.panicOnBuild(`There was an error loading your Contentful posts`)
    return
  }
  const posts = result?.data?.allContentfulMyPost.nodes
  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts) {
    posts
      .filter((post) => post.slug !== null)
      .forEach((post, index, post_) => {
        const nextPostSlug = index === 0 ? null : post_[index - 1].slug
        const previousPostSlug =
          index === post_.length - 1 ? null : post_[index + 1].slug
        createPage({
          path: generateBlogUrl(post.slug),
          component: blogPost,
          context: {
            slug: post.slug,
            previousPostSlug,
            nextPostSlug,
          },
        })
      })
  }
}
