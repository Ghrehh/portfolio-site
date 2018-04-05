import React from 'react';
import styles from './styles.module.css';

type Props = { children: React.Node };

const TransparentButton = (props: Props) => (
  <button className={styles.button}>{props.children}</button>
);

export default TransparentButton;
