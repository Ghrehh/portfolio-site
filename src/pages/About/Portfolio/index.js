import React from 'react';

import Button from 'components/Button';
import styles from './styles.module.css';

const Display = () => (
  <section className={styles.display}>
    <div className={styles.displayInner}>
      <h1 className={styles.header}>PORTFOLIO</h1>

      <p className={styles.body}>
        I open-source most of my personal projects on GitHub. Why not check them
        out?
      </p>

      <Button className={styles.portfolioButton}>View Portfolio</Button>
      <Button className={styles.gitHubButton}>GitHub</Button>
    </div>
  </section>
);

export default Display;
