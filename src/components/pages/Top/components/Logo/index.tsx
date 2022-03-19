import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

import * as styles from './Logo.module.css'

const LogoOrig = () => (
  <div className={styles.logoWrapper}>
    <div className={styles.logo}>
      <StaticImage src="../../../../../assets/images/Logo.png" alt="ロゴ画像" />
    </div>
  </div>
)
LogoOrig.displayName = 'Logo'

export const Logo = React.memo(LogoOrig)
