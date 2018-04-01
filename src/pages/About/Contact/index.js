import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';

import styles from './styles.module.css';

const Contact = () => (
  <section>
    <h1 className={styles.contactTitle}>CONTACT</h1>
    <FontAwesomeIcon icon={faCoffee} />
  </section>
);

export default Contact;
