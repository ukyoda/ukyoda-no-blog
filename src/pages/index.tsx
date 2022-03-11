import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { Logo } from '~/components/atoms/Logo'
import { Body } from '~/components/layout/Body'
import { Container } from '~/components/layout/Container'
import { Header } from '~/components/layout/Header'
import { Description } from '~/components/pages/Top/Description'
import { Notice } from '~/components/pages/Top/Notice'

type Props = PageProps<GatsbyTypes.PostsFromTopQuery>

const Top: React.FC = () => {
  return (
    <div>
      <Header />
      <Body>
        <Logo />
        <Description />
      </Body>
    </div>
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
      }
    }
  }
`
