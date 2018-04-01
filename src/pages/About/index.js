import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

import Page from 'components/Page';
import Portfolio from './Portfolio';

import styles from './styles.module.css';

class About extends React.Component {
  render = () => (
    <Page>
      <article>
        <header className={styles.header}>
          <h1 className={styles.name}>HEY, I'M GERARD BURNS</h1>
          <h2 className={styles.about}>A SOFTWARE ENGINEER FROM BELFAST</h2>
          <p className={styles.body}>
            with experience working with both front-end and back-end
            technologies, primarily React, Ruby on Rails, Django and Vue.
          </p>
        </header>

        <main>
          <Portfolio />

          <section>
            <h1 className={styles.contactTitle}>CONTACT</h1>
            <FontAwesomeIcon icon={faCoffee} />
          </section>
        </main>
      </article>
    </Page>
  );
}

export default About;
