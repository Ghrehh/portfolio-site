import React from 'react';
import styles from './styles.module.css';

const Display = () => (
  <section className={styles.display}>
    <div className={styles.displayInner}>
      <h1 className={styles.header}>PORTFOLIO</h1>

      <p className={styles.body}>
        I open-source most of my personal projects on GitHub. Why not check them
        out?
      </p>

      <button className={styles.button}>View Portfolio</button>
    </div>
  </section>
);

export default Display;
