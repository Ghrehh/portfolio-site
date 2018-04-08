// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/Button';
import styles from './styles.module.css';

type Props = {
  className?: string,
  children?: React.Node,
  link: string
};

const LinkButton = (props: Props) => (
  <Button className={props.className}>
    <Link to={props.link} className={styles.link}>
      {props.children}
    </Link>
  </Button>
);

export default LinkButton;
