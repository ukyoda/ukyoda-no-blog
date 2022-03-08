import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { Header } from '~/components/layout/Header'

type Props = PageProps<GatsbyTypes.AuthorFromMeQuery>

const Me: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default Me

export const query = graphql`
  query AuthorFromMe {
    contentfulAuthor(nickName: { eq: "ukyoda" }) {
      nickName
      avatarImage {
        gatsbyImageData
      }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
