// @flow
import React from 'react';
import combineClass from 'utils/combine-class';

import styles from './styles.module.css';

type Props = {
  tags: string[],
  className?: string
};

const Tags = (props: Props) => (
  <ul className={combineClass(styles.tags, props.className)}>
    {props.tags.map(tag => <li className={styles.tag}>{tag}</li>)}
  </ul>
);

export default Tags;
