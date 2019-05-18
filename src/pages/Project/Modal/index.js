// @flow
import * as React from 'react';

import Page from 'components/Page';
import PageHeading from 'components/text/PageHeading';
import SlideUp from 'components/animation/SlideUp';

import styles from './styles.module.css';

type Props = {
  backgroundColor: string,
  heading: string,
  children: React.Node,
  onClose: Function
};

const Modal = (props: Props) => (
  <Page
    className={styles.page}
    style={{ backgroundColor: props.backgroundColor }}
    displayFooter={false}
  >
    <SlideUp>
      <div>
        <div className={styles.closeButtonContainer}>
          <span onClick={props.onClose} className={styles.closeButton}>
            ×
          </span>
        </div>

        <PageHeading className={styles.title}>{props.heading}</PageHeading>

        {props.children}
      </div>
    </SlideUp>
  </Page>
);

export default Modal;
