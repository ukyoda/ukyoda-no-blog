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
            <p>ukyoda&#39;s Blog</p>
          </Link>
        </div>
        <nav>
          <ul className={styles.nav}>
            <li className={styles.menuItem}>
              <Link to="/me">About us</Link>
            </li>
            <li className={styles.menuItem}>
              <Link to="/mywork">My work</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  </header>
)
