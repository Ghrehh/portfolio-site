// @flow
import * as React from 'react';

import Footer from './Footer';
import styles from './styles.module.css';

type Props = { children: React.Node };

const Page = (props: Props) => (
  <div className={styles.page}>
    <main>{props.children}</main>
    <Footer />
  </div>
);

export default Page;
