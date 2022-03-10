import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { useMemo } from 'react'

import { PostContent } from '../../PostContent'

import unknownImage from '~/assets/images/unknown.png'

type Props = {
  nickName: string
  avatarImage: IGatsbyImageData | undefined
  description: string
}

export const MeTemplate: React.FC<Props> = ({
  nickName,
  avatarImage,
  description,
}) => {
  const Image = useMemo(() => {
    if (avatarImage === undefined) {
      return <img src={unknownImage} alt="avatar" />
    }
    return <GatsbyImage image={avatarImage} alt="" />
  }, [avatarImage])
  return (
    <section>
      <h2>{nickName}</h2>
      {Image}
      <PostContent html={description} />
    </section>
  )
}
