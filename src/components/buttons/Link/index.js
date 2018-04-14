// @flow
import * as React from 'react';

import UnstyledLink from 'components/UnstyledLink';
import combineClass from 'utils/combine-class';
import styles from 'components/buttons/styles.module.css';

type Props = {
  children: React.Node,
  link?: string,
  external?: boolean,
  className?: string
};

const LinkButton = (props: Props) => (
  <UnstyledLink
    link={props.link}
    external={props.external}
    className={combineClass(styles.button, props.className)}
  >
    {props.children}
  </UnstyledLink>
);

export default LinkButton;
