import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { Logo } from '~/components/atoms/Logo'
import { Body } from '~/components/layout/Body'
import { Header } from '~/components/layout/Header'
import { Layout } from '~/components/layout/Layout'
import { Description } from '~/components/pages/Top/Description'

type Props = PageProps<GatsbyTypes.PostsFromTopQuery>

const Top: React.FC<Props> = () => {
  return (
    <Layout>
      <Header />
      <Body>
        <Logo />
        <Description />
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
