import React from 'react'

import * as styles from './Card.module.css'

type Props = {
  title: string
  url: string
  body: string
}

export const Card: React.FC<Props> = ({ title, url, body }) => {
  return (
    <div className={styles.card}>
      <p className={styles.cardTitle}>
        <a href={url} title={title}>
          {title}
        </a>
      </p>
      <p className={styles.cardBody}>{body}</p>
    </div>
  )
}
