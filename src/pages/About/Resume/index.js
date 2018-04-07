// @flow
import React from 'react';

import SectionHeading from 'components/SectionHeading';
import ButtonContainer from 'components/ButtonContainer';
import Button from 'components/Button';
import styles from './styles.module.css';

const buttonStyle = additionalStyle => `${styles.button} ${additionalStyle}`;

const Resume = () => (
  <section className={styles.resume}>
    <div className={styles.resumeInner}>
      <SectionHeading className={styles.heading}>CV/RESUME</SectionHeading>

      <p className={styles.body}>
        Please view my CV for a detailed description of my past and current
        work.
      </p>

      <ButtonContainer className={styles.buttonContainer}>
        <Button className={buttonStyle(styles.viewButton)}>View CV</Button>

        <Button className={buttonStyle(styles.downloadButton)}>
          Download CV
        </Button>
      </ButtonContainer>
    </div>
  </section>
);

export default Resume;
