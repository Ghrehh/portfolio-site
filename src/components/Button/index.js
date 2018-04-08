// @flow
import * as React from 'react';

import * as childrenAndClassName from 'models/children-and-class-name';
import combineClass from 'utils/combine-class';
import styles from './styles.module.css';

const Button = (props: childrenAndClassName.Type) => (
  <button className={combineClass(styles.button, props.className)}>
    {props.children}
  </button>
);

Button.defaultProps = childrenAndClassName.defaultProps;

export default Button;
