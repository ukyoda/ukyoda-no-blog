import { graphql, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useMemo } from 'react'

import UnknownImage from '~/assets/images/unknown.png'
import { PostContent } from '~/components/PostContent'
import { NotFound } from '~/components/errors/NotFound'

type Props = PageProps<GatsbyTypes.UserQuery>

const Top: React.FC<Props> = ({ data }) => {
  if (!data.contentfulAuthor) {
    return <NotFound />
  }

  const { nickName, description, avatarImage } = data.contentfulAuthor
  const Avatar = useMemo(() => {
    if (!avatarImage?.gatsbyImageData) {
      return <img src={UnknownImage} alt="avatar" />
    }
    return <GatsbyImage image={avatarImage.gatsbyImageData} alt="" />
  }, [avatarImage])

  return (
    <section>
      <h2>{nickName}</h2>
      {Avatar}
      <PostContent html={description?.childMarkdownRemark?.html || ''} />
    </section>
  )
}

export default Top

export const query = graphql`
  query User {
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
