// @flow
import React from 'react';

import Card from 'components/Card';
import SectionHeading from 'components/text/SectionHeading';
import ButtonContainer from 'components/ButtonContainer';
import LinkButton from 'components/buttons/Link';
import styles from './styles.module.css';

const Resume = () => (
  <Card>
    <SectionHeading>CV/RESUME</SectionHeading>

    <p className={styles.body}>
      Please view my CV for a detailed description of my past and current work.
    </p>

    <ButtonContainer className={styles.buttonContainer}>
      <LinkButton className={styles.viewButton} link="" external={true}>
        View CV
      </LinkButton>

      <LinkButton className={styles.downloadButton} link="" external={true}>
        Download CV
      </LinkButton>
    </ButtonContainer>
  </Card>
);

export default Resume;
