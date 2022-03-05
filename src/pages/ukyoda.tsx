import { graphql, PageProps } from 'gatsby'
import React from 'react'

import { NotFound } from '~/components/errors/NotFound'
import { Me } from '~/components/pages/Me'

type Props = PageProps<GatsbyTypes.AuthorFromMeQuery>

const MePage: React.FC<Props> = ({ data }) => {
  if (!data.contentfulAuthor) {
    return <NotFound />
  }
  const { nickName, description, avatarImage } = data.contentfulAuthor
  return (
    <Me
      nickName={nickName || ''}
      description={description?.childMarkdownRemark?.html || ''}
      avatarImage={avatarImage?.gatsbyImageData}
    />
  )
}
export default MePage

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
