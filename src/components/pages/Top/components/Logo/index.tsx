import React from 'react'

import * as styles from './Logo.module.css'

import LogoImage from '~/assets/images/Logo.png'

const LogoOrig = () => (
  <div className={styles.logoWrapper}>
    <div className={styles.logo}>
      <img src={LogoImage} alt="ロゴ画像" />
    </div>
  </div>
)
LogoOrig.displayName = 'Logo'

export const Logo = React.memo(LogoOrig)
