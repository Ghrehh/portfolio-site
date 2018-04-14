// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

type Props = {
  children: React.Node,
  link: string,
  external: boolean
};

const LinkButton = (props: Props) => {
  if (props.external) {
    return (
      <a target="_blank" href={props.link} className={styles.link}>
        {props.children}
      </a>
    );
  }

  return (
    <Link to={props.link} className={styles.link}>
      {props.children}
    </Link>
  );
};

LinkButton.defaultProps = {
  external: false
};

export default LinkButton;
