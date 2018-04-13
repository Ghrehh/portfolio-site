// @flow
import React from 'react';

import Page from 'components/Page';
import PageHeading from 'components/PageHeading';
import FadeIn from 'components/animation/FadeIn';
import Portfolio from './Portfolio';
import Resume from './Resume';

import styles from './styles.module.css';

const About = () => (
  <FadeIn>
    <Page>
      <header className={styles.header}>
        <PageHeading className={styles.heading}>
          HEY, I'M GERARD BURNS
        </PageHeading>

        <h2 className={styles.subHeading}>A SOFTWARE ENGINEER FROM BELFAST</h2>

        <p className={styles.body}>
          with experience working with both front-end and back-end technologies,
          primarily React, Ruby on Rails, Django and Vue.
        </p>
      </header>

      <Portfolio />
      <Resume />
    </Page>
  </FadeIn>
);

export default About;
