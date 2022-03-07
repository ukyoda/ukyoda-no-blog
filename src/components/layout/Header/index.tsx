import { Link } from 'gatsby'
import React from 'react'

import { Container } from '../Container'

import * as styles from './Header.module.css'

export const Header: React.VFC = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles.brand}>
        <Link to="/">
          <h1>Header</h1>
        </Link>
      </div>
    </Container>
  </header>
)
