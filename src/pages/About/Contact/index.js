// @flow
import * as React from 'react';

import SectionHeading from 'components/SectionHeading';
import Button from 'components/Button';

import styles from './styles.module.css';

const Contact = () => (
  <React.Fragment>
    <div className={styles.slantedBackground} />

    <section className={styles.contact}>
      <div className={styles.contactInner}>
        <div className={styles.textContainer}>
          <SectionHeading className={styles.heading}>CONTACT</SectionHeading>
          <h2 className={styles.subSectionHeading}>
            Feel free to get in touch.
          </h2>
        </div>

        <div>
          <Button className={styles.twitterButton}>Twitter</Button>
          <Button className={styles.emailButton}>Email</Button>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Contact;
