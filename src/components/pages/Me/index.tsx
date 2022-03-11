import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { useMemo } from 'react'

import { PostContent } from '../../PostContent'

type Props = {
  name: string
  description: string
  avatar: string
  links: {
    qiita: string
    github: string
    twitter: string
  }
}

const MeTemplateOrig: React.FC<Props> = ({
  name,
  description,
  avatar,
  links,
}) => {
  const Description = useMemo(() => {
    return <PostContent html={description} />
  }, [description])
  return (
    <section>
      <div>
        <img src={avatar} alt="" />
      </div>
      <h2>{name}</h2>
      <div>
        <p>
          <a href={links.twitter}>twitter</a>
        </p>
        <p>
          <a href={links.github}>github</a>
        </p>
        <p>
          <a href={links.qiita}>qiita</a>
        </p>
      </div>
      <div>{Description}</div>
    </section>
  )
}

MeTemplateOrig.displayName = 'MeTemplate'
export const MeTemplate = React.memo(MeTemplateOrig)
