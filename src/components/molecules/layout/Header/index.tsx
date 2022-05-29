import { Link } from 'gatsby'
import React from 'react'

import { Container } from '../Container'

import * as styles from './Header.module.css'

export const Header: React.VFC = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles.headerContents}>
        <div className={styles.brand}>
          <Link to="/">
            <h1>ukyoda&#39;s Blog</h1>
          </Link>
        </div>
        <nav>
          <ul className={styles.nav}>
            <li className={styles.menuItem}>
              <Link to="/me">About me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  </header>
)
