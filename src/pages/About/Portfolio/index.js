// @flow
import React from 'react';

import SectionHeading from 'components/text/SectionHeading';
import LinkButton from 'components/buttons/Link';
import ButtonContainer from 'components/ButtonContainer';
import * as pathConstants from 'constants/paths';
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
        <LinkButton link={pathConstants.PROJECTS}>View Portfolio</LinkButton>
        <LinkButton
          className={styles.gitHubButton}
          link="https://github.com/ghrehh"
          external={true}
        >
          GitHub
        </LinkButton>
      </ButtonContainer>
    </div>
  </section>
);

export default Portfolio;
