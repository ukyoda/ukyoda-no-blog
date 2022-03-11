import { graphql, PageProps } from 'gatsby'
import { GatsbyImageProps } from 'gatsby-plugin-image'
import React, { useMemo } from 'react'

import { PostContent } from '~/components/PostContent'
import { NotFound } from '~/components/errors/NotFound'
import { Body } from '~/components/layout/Body'
import { Header } from '~/components/layout/Header'
import { MeTemplate } from '~/components/pages/Me'
import { validationOptional } from '~/utils/validationOptional'

type Props = PageProps<GatsbyTypes.FindAuthorQuery>
type Author = {
  name: string
  description: string
  qiita: string
  github: string
  twitter: string
  avatar: string
}

const extractAuthor = (
  data: PageProps<GatsbyTypes.FindAuthorQuery>['data']
): Author | undefined => {
  const contentfulAuthor = data?.contentfulAuthor
  const description = contentfulAuthor?.description?.childMarkdownRemark?.html
  const authorOptional: Partial<Author> = {
    name: contentfulAuthor?.nickName,
    description,
    qiita: contentfulAuthor?.qiita,
    github: contentfulAuthor?.github,
    twitter: contentfulAuthor?.twitter,
    avatar: contentfulAuthor?.avatarImage?.file?.url,
  }
  return validationOptional(authorOptional) ? authorOptional : undefined
}

const Me: React.FC<Props> = ({ data }) => {
  const author = extractAuthor(data)
  const Description = useMemo(() => {
    const description = author?.description
    if (!description) {
      return null
    }
    return <PostContent html={description} />
  }, [author])
  if (!author) {
    return <NotFound />
  }
  return (
    <div>
      <Header />
      <Body>
        <MeTemplate
          name={author.name}
          description={author.description}
          avatar={author.avatar}
          links={{
            qiita: author.qiita,
            github: author.github,
            twitter: author.twitter,
          }}
        />
      </Body>
    </div>
  )
}

export default Me

export const query = graphql`
  query FindAuthor {
    contentfulAuthor {
      github
      nickName
      qiita
      twitter
      updatedAt
      id
      avatarImage {
        file {
          url
          contentType
        }
        title
      }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
