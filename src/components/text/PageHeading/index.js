// @flow
import React from 'react';

import * as childrenAndClassName from 'models/children-and-class-name';
import combineClass from 'utils/combine-class';
import styles from './styles.module.css';

const PageHeading = (props: childrenAndClassName.Type) => (
  <h1 className={combineClass(styles.heading, props.className)}>
    {props.children}
  </h1>
);

export default PageHeading;
