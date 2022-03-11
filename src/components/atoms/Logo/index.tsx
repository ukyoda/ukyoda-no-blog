import React from 'react'

import * as styles from './Logo.module.css'

import LogoImage from '~/assets/images/Logo.png'

const LogoOrig = () => (
  <div className={styles.logoWrapper}>
    <img className={styles.logo} src={LogoImage} alt="Wel come to my blog." />
  </div>
)
LogoOrig.displayName = 'Logo'

export const Logo = React.memo(LogoOrig)
