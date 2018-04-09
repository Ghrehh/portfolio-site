// @flow
import * as React from 'react';

import Button from 'components/Button';
import styles from './styles.module.css';

type Props = {
  children: React.Node,
  onClick?: Function
};

const TransparentButton = (props: Props) => (
  <Button className={styles.button} onClick={props.onClick}>
    {props.children}
  </Button>
);

export default TransparentButton;
