import React from 'react';

import Heading from 'components/Heading';
import Button from 'components/Button';

import styles from './styles.module.css';

const Contact = () => (
  <React.Fragment>
    <div className={styles.slantedBackground} />

    <section className={styles.contact}>
      <div className={styles.contactInner}>
        <div className={styles.textContainer}>
          <Heading className={styles.heading}>CONTACT</Heading>
          <h2 className={styles.subHeading}>Feel free to get in touch.</h2>
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
