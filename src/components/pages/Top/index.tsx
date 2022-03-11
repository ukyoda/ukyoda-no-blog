import React from 'react'

import { Description } from './Description'
import * as styles from './Top.module.css'
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
