import {
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useMemo } from 'react'

import { PostContent } from '../../PostContent'

import * as styles from './Me.module.css'

import qiitaIcon from '~/assets/images/qiita.png'
import { ExternalLink } from '~/components/atoms/Anchor'

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
        <div className={styles.imageWrapper}>
          <img src={avatar} alt="" className={styles.image} />
        </div>
      </div>
      <div>
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.links}>
          <ExternalLink href={links.twitter} aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitterSquare} color="#00acee" />
          </ExternalLink>
          <ExternalLink href={links.github}>
            <FontAwesomeIcon icon={faGithubSquare} />
          </ExternalLink>
          <ExternalLink href={links.qiita}>
            <img src={qiitaIcon} alt="qiita" />
          </ExternalLink>
        </div>
        <div className={styles.description}>{Description}</div>
      </div>
    </section>
  )
}

MeTemplateOrig.displayName = 'MeTemplate'
export const MeTemplate = React.memo(MeTemplateOrig)
