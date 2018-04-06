// @flow
import React from 'react';
import styles from './styles.module.css';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <h1 className={styles.title}>G</h1>

      <nav className={styles.navigation}>
        <ul>
          <li>
            <a>about</a>
          </li>
          <li>
            <a>work</a>
          </li>
          <li>
            <a>github</a>
          </li>
        </ul>
      </nav>
    </div>

    <div className={styles.headerUnderline} />
  </header>
);
export default Header;
