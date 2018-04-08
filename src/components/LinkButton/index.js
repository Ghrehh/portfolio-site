// @flow
import * as React from 'react';

import Button from 'components/Button';
import UnstyledLink from 'components/UnstyledLink';

type Props = {
  className?: string,
  children: React.Node,
  link: string
};

const LinkButton = (props: Props) => (
  <UnstyledLink link={props.link}>
    <Button className={props.className}>{props.children}</Button>
  </UnstyledLink>
);

export default LinkButton;
