// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';

import combineClass from 'utils/combine-class';
import styles from './styles.module.css';

type Props = {
  children: React.Node,
  link: string,
  external: boolean,
  className?: string,
  download: boolean
};

const UnstyledLink = (props: Props) => {
  const className = combineClass(styles.link, props.className);

  if (props.external) {
    return (
      <a
        target="_blank"
        href={props.link}
        className={className}
        download={props.download}
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link to={props.link} className={className}>
      {props.children}
    </Link>
  );
};

UnstyledLink.defaultProps = {
  external: false,
  link: '',
  download: false
};

export default UnstyledLink;
