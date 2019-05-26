// @flow
import * as React from 'react';

import SectionHeading from 'components/text/SectionHeading';
import LinkButton from 'components/buttons/Link';

import styles from './styles.module.css';

const Footer = () => (
  <React.Fragment>
    <div className={styles.slantedBackground} />

    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.textContainer}>
          <SectionHeading className={styles.heading}>CONTACT</SectionHeading>
          <h2 className={styles.subHeading}>Feel free to get in touch.</h2>
        </div>

        <div>
          <LinkButton
            className={styles.emailButton}
            link="mailto:ghrehh@gmail.com"
            external={true}
          >
            Email
          </LinkButton>

          <LinkButton
            className={styles.linkedInButton}
            link="https://www.linkedin.com/in/gerard-burns-0b4864104/"
            external={true}
          >
            LinkedIn
          </LinkButton>
        </div>
      </div>
    </footer>
  </React.Fragment>
);

export default Footer;
