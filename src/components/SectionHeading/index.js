// @flow
import React from 'react';

import * as childrenAndClassName from 'models/children-and-class-name';
import styles from './styles.module.css';

const SectionHeading = (props: childrenAndClassName.Type) => {
  const combinedClass = `${styles.heading} ${props.className}`;

  return <h1 className={combinedClass}>{props.children}</h1>;
};

SectionHeading.defaultProps = childrenAndClassName.defaultProps;

export default SectionHeading;
