// @flow
import * as React from 'react';
import combineClass from 'utils/combine-class';
import styles from './styles.module.css';

type Props = {
  children: React.Node,
  className?: string
};

const Card = (props: Props) => (
  <section className={styles.card}>
    <div className={combineClass(styles.cardInner, props.className)}>
      {props.children}
    </div>
  </section>
);

export default Card;
