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
      <a href={url} className={styles.cardContent}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardBody}>{body}</p>
      </a>
    </div>
  )
}
