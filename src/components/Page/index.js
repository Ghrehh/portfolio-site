// @flow
import * as React from 'react';

import ScrollToTop from 'components/ScrollToTop';
import Footer from './Footer';
import combineClass from 'utils/combine-class';
import styles from './styles.module.css';

type Props = {
  children: React.Node,
  style?: {},
  className?: string,
  displayFooter?: boolean
};

const renderFooter = displayFooter =>
  displayFooter === false ? null : <Footer />;

const Page = (props: Props) => (
  <React.Fragment>
    <ScrollToTop />

    <div
      style={props.style}
      className={combineClass(styles.page, props.className)}
    >
      <main className={styles.main}>{props.children}</main>
      {renderFooter(props.displayFooter)}
    </div>
  </React.Fragment>
);

export default Page;
