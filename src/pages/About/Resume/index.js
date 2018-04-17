// @flow
import React from 'react';

import Card from 'components/Card';
import SectionHeading from 'components/text/SectionHeading';
import ButtonContainer from 'components/buttons/Container';
import LinkButton from 'components/buttons/Link';
import styles from './styles.module.css';

const Resume = () => (
  <Card>
    <SectionHeading>CV/RESUME</SectionHeading>

    <p className={styles.body}>
      Please view my CV for a detailed description of my past and current work.
    </p>

    <ButtonContainer className={styles.buttonContainer}>
      <LinkButton
        className={styles.viewButton}
        external={true}
        link="/Gerard Burns CV.pdf"
      >
        View CV
      </LinkButton>

      <LinkButton
        className={styles.downloadButton}
        external={true}
        link="/Gerard Burns CV.pdf"
        download={true}
      >
        Download CV
      </LinkButton>
    </ButtonContainer>
  </Card>
);

export default Resume;
