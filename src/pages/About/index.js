import React from 'react';

import Page from 'components/Page';
import Heading from './Heading';
import SubHeading from './SubHeading';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';

import styles from './styles.module.css';

const About = () => (
  <Page>
    <section className={styles.intro}>
      <Heading className={styles.heading}>HEY, I'M GERARD BURNS</Heading>

      <SubHeading className={styles.subHeading}>
        A SOFTWARE ENGINEER FROM BELFAST
      </SubHeading>

      <p className={styles.body}>
        with experience working with both front-end and back-end technologies,
        primarily React, Ruby on Rails, Django and Vue.
      </p>
    </section>

    <Portfolio />
    <Resume />
    <Contact />
  </Page>
);

export default About;
