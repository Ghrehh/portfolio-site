// @flow

import * as React from 'react';
import styles from './styles.module.css';

type Nodes = React.Node[] | React.Node;

type Props = {
  children?: Nodes,
  className?: string
};

const combineClasses = (
  baseStyle: string,
  optionalStyle: string = ''
): string => `${baseStyle} ${optionalStyle}`;

const Button = (props: Props) => (
  <button className={combineClasses(styles.button, props.className)}>
    {props.children}
  </button>
);

export default Button;
