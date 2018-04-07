// @flow
import React from 'react';

import SectionHeading from 'components/SectionHeading';
import Button from 'components/Button';
import ButtonContainer from 'components/ButtonContainer';
import styles from './styles.module.css';

const Portfolio = () => (
  <section className={styles.display}>
    <div className={styles.displayInner}>
      <SectionHeading className={styles.heading}>PORTFOLIO</SectionHeading>

      <p className={styles.body}>
        I open-source most of my personal projects on GitHub. Why not check them
        out?
      </p>

      <ButtonContainer>
        <Button>View Portfolio</Button>
        <Button className={styles.gitHubButton}>GitHub</Button>
      </ButtonContainer>
    </div>
  </section>
);

export default Portfolio;
