// @flow
import React from 'react';

import Card from 'components/Card';
import SectionHeading from 'components/text/SectionHeading';
import LinkButton from 'components/buttons/Link';
import styles from './styles.module.css';

const Resume = () => (
  <Card>
    <SectionHeading>CV/RESUME</SectionHeading>

    <p className={styles.body}>
      Please view my CV for a detailed description of my past and current work.
    </p>

    <LinkButton
      className={styles.button}
      external={true}
      link="/gerard-burns-cv.pdf"
    >
      View CV
    </LinkButton>
  </Card>
);

export default Resume;
