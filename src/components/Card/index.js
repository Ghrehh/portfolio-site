// @flow
import * as React from 'react';
import combineClass from 'utils/combine-class';
import styles from './styles.module.css';

type Props = {
  children: React.Node,
  className?: string,
  style?: Object
};

const Card = (props: Props) => (
  <section
    className={combineClass(styles.card, props.className)}
    style={props.style}
  >
    {props.children}
  </section>
);

export default Card;
