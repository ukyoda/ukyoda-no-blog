// TODO: remove eslint-disable after the ClassComponent refactor to a FunctionalComponent
/* eslint-disable react/prefer-stateless-function */
import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'

import ArticlePreview from '../components/article-preview'
import Hero from '../components/hero'
import Layout from '../components/layout'
import Seo from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')

    return (
      <Layout>
        <Seo title="Blog" />
        <Hero title="Blog" />
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
