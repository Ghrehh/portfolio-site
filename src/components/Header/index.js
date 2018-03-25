import React from 'react';
import styles from './styles.module.css';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.title}>G</h1>

          <nav className={styles.navigation}>
            <ul>
              <li>
                <a>work</a>
              </li>
              <li>
                <a>github</a>
              </li>
              <li>
                <a>about</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.headerUnderline} />
      </header>
    );
  }
}

export default Header;
