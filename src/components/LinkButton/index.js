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

const scrollToTop = () => window.scrollTo(0, 0);

const LinkButton = (props: Props) => (
  <Link to={props.link} className={styles.link}>
    <Button onClick={scrollToTop} className={props.className}>
        {props.children}
    </Button>
  </Link>
);

export default LinkButton;
