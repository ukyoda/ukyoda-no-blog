import { cx } from 'linaria'
import React from 'react'

import * as styles from './Anchor.module.css'

interface Props extends React.HTMLProps<HTMLAnchorElement> {
  className?: string
}

export const Anchor = React.forwardRef<HTMLAnchorElement, Props>(
  (props, ref) => {
    const { className: exClassName, children, ...others } = props
    const className = cx(styles.anchor, exClassName)
    return (
      <a className={className} {...others} ref={ref}>
        {children}
      </a>
    )
  }
)

Anchor.displayName = 'Anchor'

type ExternalLinkProps = {
  href: string
  className?: string
  children?: React.ReactChild
  ariaLabel?: string
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  className,
  children,
  ariaLabel,
}) => {
  return (
    <Anchor
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </Anchor>
  )
}
