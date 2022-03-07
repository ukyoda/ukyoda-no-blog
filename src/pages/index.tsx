import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { Container } from '~/components/layout/Container'
import { Header } from '~/components/layout/Header'

const Top: React.FC = () => {
  return (
    <div>
      <Header />
      <Container>
        <div>test</div>
      </Container>
    </div>
  )
}

export default Top

export const query = graphql`
  query PostsFromTop {
    allContentfulMyPost(sort: { order: DESC }) {
      nodes {
        title
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
