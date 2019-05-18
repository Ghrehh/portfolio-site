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
  onClick?: Function
};

const UnstyledLink = (props: Props) => {
  const className = combineClass(styles.link, props.className);

  if (props.external) {
    return (
      <a target="_blank" href={props.link} className={className}>
        {props.children}
      </a>
    );
  }

  return (
    <Link onClick={props.onClick} to={props.link} className={className}>
      {props.children}
    </Link>
  );
};

UnstyledLink.defaultProps = {
  external: false,
  link: ''
};

export default UnstyledLink;
