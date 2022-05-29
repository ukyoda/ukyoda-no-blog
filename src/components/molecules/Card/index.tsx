import React, { ComponentProps } from 'react'

import * as styles from './Card.module.css'

import { Tag } from '~/components/atoms/Tag'

type Props = {
  title: string
  url: string
  body: string
  publishDate: string
  tags?: ComponentProps<typeof Tag>[]
}

export const Card: React.FC<Props> = React.memo(
  ({ title, url, body, publishDate, tags = [] }) => {
    const Tags = tags.map(({ name, pathname }, idx) => {
      return <Tag name={name} pathname={pathname} key={`idx-${idx}`} />
    })
    return (
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>
          <a href={url} title={title}>
            {title}
          </a>
        </h3>
        {Tags.length > 0 && <div className={styles.tags}>{Tags}</div>}
        <p className={styles.cardBody}>{body}</p>
        <p className={styles.publishDate}>{publishDate}</p>
      </div>
    )
  }
)
