import React from 'react';

import Heading from 'components/Heading';
import ButtonContainer from 'components/ButtonContainer';
import Button from 'components/Button';
import styles from './styles.module.css';

const buttonStyle = additionalStyle => `${styles.button} ${additionalStyle}`;

const Resume = () => (
  <React.Fragment>
    <section className={styles.resume}>
      <div className={styles.resumeInner}>
        <Heading className={styles.heading}>CV/RESUME</Heading>

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

    <div className={styles.slantedBackground} />
  </React.Fragment>
);

export default Resume;
