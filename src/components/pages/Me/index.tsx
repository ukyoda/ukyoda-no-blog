import {
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from 'gatsby-plugin-image'
import { cx } from 'linaria'
import React from 'react'

import { PostContent } from '../../PostContent'

import * as styles from './Me.module.css'

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
  pgLangs: string
  hobbies: string
}

const MeTemplateOrig: React.FC<Props> = ({
  name,
  description,
  avatar,
  links,
  pgLangs,
  hobbies,
}) => {
  return (
    <section className={styles.section}>
      <div>
        <div className={styles.avatar}>
          <img src={avatar} alt="アバター画像" className={styles.avatarImage} />
        </div>
        <div
          className={styles.links}
          aria-label="私の開発用のSNSアカウントです。"
        >
          <ExternalLink
            href={links.twitter}
            ariaLabel="私のTwitterアカウントです"
          >
            <FontAwesomeIcon icon={faTwitterSquare} color="#00acee" />
          </ExternalLink>
          <ExternalLink
            href={links.github}
            ariaLabel="私のGithubアカウントです"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </ExternalLink>
          <ExternalLink
            href={links.qiita}
            ariaLabel="私のQiitaアカウントです。"
          >
            <StaticImage
              src="../../../assets/images/qiita.png"
              alt=""
              placeholder="tracedSVG"
            />
          </ExternalLink>
        </div>
      </div>
      <div className={styles.profileContent}>
        <div className={styles.personal}>
          <h2 className={styles.name}>{name}</h2>
          <p>
            <span className={styles.jobLabel}>My Job:</span>
            Frontend Engineer
          </p>
        </div>
        <section className={cx(styles.subSection, styles.description)}>
          <h3 className={styles.title}>Self Introduction:</h3>
          <PostContent html={description} />
        </section>
        <section className={styles.subSection}>
          <h3 className={styles.title}>My Skills:</h3>
          <PostContent className={styles.list} html={pgLangs} />
        </section>
        <section className={styles.subSection}>
          <h3 className={styles.title}>My Hobbies:</h3>
          <PostContent className={styles.list} html={hobbies} />
        </section>
      </div>
    </section>
  )
}

MeTemplateOrig.displayName = 'MeTemplate'
export const MeTemplate = React.memo(MeTemplateOrig)
