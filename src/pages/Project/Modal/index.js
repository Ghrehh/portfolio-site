// @flow
import * as React from 'react';

import * as pathConstants from 'constants/paths';
import Page from 'components/Page';
import PageHeading from 'components/PageHeading';
import TransparentButton from 'components/TransparentButton';
import UnstyledLink from 'components/UnstyledLink';
import FadeIn from 'components/FadeIn';

import styles from './styles.module.css';

type Props = {
  backgroundColor: string,
  heading: string,
  children: React.Node
};

const Modal = (props: Props) => (
  <FadeIn timeout={0}>
    <Page
      className={styles.page}
      style={{ backgroundColor: props.backgroundColor }}
      displayFooter={false}
    >
      <div className={styles.closeButtonContainer}>
        <TransparentButton>
          <UnstyledLink link={pathConstants.PROJECTS}>
            <span className={styles.closeButton}>×</span>
          </UnstyledLink>
        </TransparentButton>
      </div>

      <PageHeading className={styles.title}>{props.heading}</PageHeading>

      {props.children}
    </Page>
  </FadeIn>
);

export default Modal;
