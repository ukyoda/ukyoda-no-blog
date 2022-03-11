import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { Body } from '~/components/layout/Body'
import { Header } from '~/components/layout/Header'
import { Layout } from '~/components/layout/Layout'
import { TopTemplate } from '~/components/pages/Top'

type Props = PageProps<GatsbyTypes.PostsFromTopQuery>

const Top: React.FC<Props> = () => {
  return (
    <Layout>
      <Header />
      <Body>
        <TopTemplate />
      </Body>
    </Layout>
  )
}

export default Top

export const query = graphql`
  query PostsFromTop {
    allContentfulMyPost {
      nodes {
        body {
          body
          childMarkdownRemark {
            html
          }
        }
        title
        slug
      }
    }
  }
`
