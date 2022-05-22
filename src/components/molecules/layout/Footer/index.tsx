import React from 'react'

import * as styles from './Footer.module.css'

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.notice}>
          <small className={styles.small}>
            ※このサイトはGoogle AnalyticsとCookieを使っています。
          </small>
          <small className={styles.small}>
            ※このサイトはGatsbyで作成しています
          </small>
        </div>
        <div className={styles.madeBy}>
          <small className={styles.small}>© made by ukyoda</small>
        </div>
      </div>
    </footer>
  )
}
