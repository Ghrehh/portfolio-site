// @flow
import * as React from 'react';

import * as childrenAndClassName from 'models/children-and-class-name';
import styles from './styles.module.css';

const Button = (props: childrenAndClassName.Type) => (
  <button className={`${styles.button} ${props.className}`}>
    {props.children}
  </button>
);

Button.defaultProps = childrenAndClassName.defaultProps;

export default Button;
