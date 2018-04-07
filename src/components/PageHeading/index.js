// @flow
import React from 'react';

import * as childrenAndClassName from 'models/children-and-class-name';
import styles from './styles.module.css';

const PageHeading = (props: childrenAndClassName.Type) => {
  const combinedClass = `${styles.heading} ${props.className}`;

  return <h1 className={combinedClass}>{props.children}</h1>;
};

PageHeading.defaultProps = childrenAndClassName.defaultProps;

export default PageHeading;
