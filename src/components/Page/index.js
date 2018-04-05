// @flow
import * as React from 'react';

type Props = { children: React.Node };

const Page = (props: Props) => (
  <React.Fragment>
    <main>{props.children}</main>
  </React.Fragment>
);

export default Page;
