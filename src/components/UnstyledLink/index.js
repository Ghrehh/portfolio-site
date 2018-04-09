// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

type Props = {
  children: React.Node,
  link: string,
  external: boolean
};

const scrollToTop = () => window.scrollTo(0, 0);

const LinkButton = (props: Props) => {
  if (props.external) {
    return (
      <a
        target="_blank"
        href={props.link}
        onClick={scrollToTop}
        className={styles.link}
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link to={props.link} onClick={scrollToTop} className={styles.link}>
      {props.children}
    </Link>
  );
};

LinkButton.defaultProps = {
  external: false
};

export default LinkButton;
