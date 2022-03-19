import * as path from 'path'

import { GatsbyNode } from 'gatsby'

import { generateBlogUrl } from './utils/generateBlogUrl'

type ResultNode = {
  title: string
  slug: string
}
type AllContentfulBlogPost = {
  allContentfulMyPost: {
    nodes: ResultNode[]
  }
}

export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.tsx')

  const result = await graphql<AllContentfulBlogPost>(
    `
      {
        allContentfulMyPost(sort: { order: DESC, fields: createdAt }) {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const posts = result?.data?.allContentfulMyPost.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts) {
    posts.forEach((post, index) => {
      const nextPostSlug = index === 0 ? null : posts[index - 1].slug
      const previousPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

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
