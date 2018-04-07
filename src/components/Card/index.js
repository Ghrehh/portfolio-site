// @flow
import * as React from 'react';
import styles from './styles.module.css';

const Card = (props: { children: React.Node }) => (
  <section className={styles.card}>
    <div className={styles.cardInner}>{props.children}</div>
  </section>
);

export default Card;
