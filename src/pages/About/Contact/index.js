import React from 'react';

import Heading from 'components/Heading';
import Button from 'components/Button';
import styles from './styles.module.css';

const buttonStyle = additionalStyle => `${styles.button} ${additionalStyle}`;

const Contact = () => (
  <section>
    <Heading className={styles.heading}>CONTACT</Heading>

    <div className={styles.buttonContainer}>
      <Button className={buttonStyle(styles.twitterButton)}>Twitter</Button>

      <Button className={buttonStyle(styles.emailButton)}>Email</Button>
    </div>
  </section>
);

export default Contact;
