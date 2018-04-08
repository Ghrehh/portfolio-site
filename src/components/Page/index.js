// @flow
import * as React from 'react';

import Footer from './Footer';
import styles from './styles.module.css';

type Props = {
  children: React.Node,
  style?: {}
};

const Page = (props: Props) => (
  <div style={props.style} className={styles.page}>
    <main className={styles.main}>{props.children}</main>
    <Footer />
  </div>
);

export default Page;
