/* eslint-disable react/prop-types */
import { cx } from 'linaria'
import React, { forwardRef } from 'react'

import * as styles from './Container.module.css'

interface Props extends React.HTMLProps<HTMLDivElement> {
  className?: string
}

export const Container = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { className: exClassName, ...others } = props
  const className = cx(styles.myContainer, exClassName)
  return <div className={className} {...others} ref={ref} />
})
Container.displayName = 'Container'
