// @flow
import * as React from 'react';

import Page from 'components/Page';
import PageHeading from 'components/text/PageHeading';
import UnstyledLink from 'components/UnstyledLink';
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
          <UnstyledLink onClick={props.onClose}>
            <span className={styles.closeButton}>×</span>
          </UnstyledLink>
        </div>

        <PageHeading className={styles.title}>{props.heading}</PageHeading>

        {props.children}
      </div>
    </SlideUp>
  </Page>
);

export default Modal;
