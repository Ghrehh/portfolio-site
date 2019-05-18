// @flow
import React from 'react';

import styles from './styles.module.css';

type Props = {
  tags: string[]
};

const Tags = (props: Props) => (
  <ul className={styles.tags}>
    {props.tags.map(tag => <li className={styles.tag}>{tag}</li>)}
  </ul>
);

export default Tags;
