// @flow
import React from 'react';

import Card from 'components/Card';
import SectionHeading from 'components/SectionHeading';
import ButtonContainer from 'components/ButtonContainer';
import Button from 'components/Button';
import styles from './styles.module.css';

const Resume = () => (
  <Card>
    <SectionHeading className={styles.heading}>CV/RESUME</SectionHeading>

    <p className={styles.body}>
      Please view my CV for a detailed description of my past and current work.
    </p>

    <ButtonContainer className={styles.buttonContainer}>
      <Button className={styles.viewButton}>View CV</Button>

      <Button className={styles.downloadButton}>Download CV</Button>
    </ButtonContainer>
  </Card>
);

export default Resume;
