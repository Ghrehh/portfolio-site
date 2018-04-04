import React from 'react';

import Heading from 'components/Heading';
import Button from 'components/Button';
import styles from './styles.module.css';

const buttonStyle = additionalStyle => `${styles.button} ${additionalStyle}`;

const Contact = () => (
  <React.Fragment>
    <div className={styles.slantedBackground} />
    <section className={styles.contact}>
      <div className={styles.contactInner}>
        <div className={styles.textContainer}>
          <Heading className={styles.heading}>CONTACT</Heading>
          <p className={styles.body}>Feel free to get in touch.</p>
        </div>

        <div>
          <Button className={buttonStyle(styles.twitterButton)}>Twitter</Button>
          <Button className={buttonStyle(styles.emailButton)}>Email</Button>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default Contact;
