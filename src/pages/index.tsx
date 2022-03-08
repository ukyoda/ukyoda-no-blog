import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { Body } from '~/components/layout/Body'
import { Container } from '~/components/layout/Container'
import { Header } from '~/components/layout/Header'
import { Description } from '~/components/pages/Top/Description'

type Props = PageProps<GatsbyTypes.PostsFromTopQuery>

const Top: React.FC = () => {
  return (
    <div>
      <Header />
      <Body>
        <Description />
      </Body>
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
