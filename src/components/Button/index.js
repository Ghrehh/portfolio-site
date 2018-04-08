// @flow
import * as React from 'react';

import combineClass from 'utils/combine-class';
import styles from './styles.module.css';

type Props = {
  children?: React.Node,
  className?: string,
  onClick?: Function
};

const Button = (props: Props) => (
  <button
    className={combineClass(styles.button, props.className)}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
