import React from 'react'

type Props = {
  children: React.ReactNode
  as?: 'div' | 'footer'
}

const Container: React.VFC<Props> = ({ children, as = 'div' }) => {
  const style: React.CSSProperties = {
    maxWidth: 'var(--size-max-width)',
    margin: '0 auto',
    padding: 'var(--space-2xl) var(--size-gutter)',
  }
  switch (as) {
    case 'div':
      return <div style={style}>{children}</div>
    case 'footer':
      return <footer style={style}>{children}</footer>
  }
}

export default Container
