// @flow
import * as React from 'react';
import Footer from './Footer';

type Props = { children: React.Node };

const Page = (props: Props) => (
  <React.Fragment>
    <main>{props.children}</main>
    <Footer />
  </React.Fragment>
);

export default Page;
