import React from 'react'

import * as styles from './Top.module.css'
import { Description } from './components/Description'
import { Logo } from './components/Logo'

const TopTemplateOrig = () => {
  return (
    <div className={styles.top}>
      <Logo />
      <Description />
    </div>
  )
}
TopTemplateOrig.displayName = 'TopTemplate'

export const TopTemplate = React.memo(TopTemplateOrig)
