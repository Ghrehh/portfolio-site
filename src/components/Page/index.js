// @flow
import * as React from 'react';

import Footer from './Footer';
import combineClass from 'utils/combine-class';
import styles from './styles.module.css';

type Props = {
  children: React.Node,
  style?: {},
  className?: string
};

const Page = (props: Props) => (
  <div style={props.style} className={combineClass(styles.page, props.className)}>
    <main className={styles.main}>{props.children}</main>
    <Footer />
  </div>
);

export default Page;
