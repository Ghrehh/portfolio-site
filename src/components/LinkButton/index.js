// @flow
import * as React from 'react';

import Button from 'components/Button';
import UnstyledLink from 'components/UnstyledLink';

type Props = {
  className?: string,
  children: React.Node,
  link: string,
  external?: boolean
};

const LinkButton = (props: Props) => (
  <UnstyledLink link={props.link} external={props.external}>
    <Button className={props.className}>{props.children}</Button>
  </UnstyledLink>
);

export default LinkButton;
