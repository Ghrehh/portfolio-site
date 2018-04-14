// @flow
import * as React from 'react';

import SectionHeading from 'components/text/SectionHeading';
import Button from 'components/Button';

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
          <Button className={styles.twitterButton}>Twitter</Button>
          <Button className={styles.emailButton}>Email</Button>
          <Button className={styles.linkedInButton}>LinkedIn</Button>
        </div>
      </div>
    </footer>
  </React.Fragment>
);

export default Footer;
