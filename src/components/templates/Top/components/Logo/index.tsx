import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import * as styles from './Logo.module.css'

const LogoOrig = () => (
  <div className={styles.logoWrapper}>
    <h1 className={styles.logo}>
      <StaticImage src="../../../../../assets/images/Logo.png" alt="ロゴ画像" />
    </h1>
  </div>
)
LogoOrig.displayName = 'Logo'

export const Logo = React.memo(LogoOrig)
