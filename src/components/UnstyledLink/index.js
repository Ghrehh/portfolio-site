// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

type Props = {
  children: React.Node,
  link: string
};

const scrollToTop = () => window.scrollTo(0, 0);

const LinkButton = (props: Props) => (
  <Link to={props.link} onClick={scrollToTop} className={styles.link}>
    {props.children}
  </Link>
);

export default LinkButton;
