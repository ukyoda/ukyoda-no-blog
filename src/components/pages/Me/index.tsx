import React, { useMemo } from 'react'

import { PostContent } from '../../PostContent'

import * as styles from './Me.module.css'

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
    <section className={styles.section}>
      <div>
        <div>
          <img src={avatar} alt="" className={styles.image} />
        </div>
      </div>
      <div>
        <h2 className={styles.name}>{name}</h2>
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
      </div>
    </section>
  )
}

MeTemplateOrig.displayName = 'MeTemplate'
export const MeTemplate = React.memo(MeTemplateOrig)
