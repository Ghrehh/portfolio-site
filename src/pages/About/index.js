import React from 'react';

import Page from 'components/Page';
import Display from './Display';

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
          <Display />

          <section>
            <h1 className={styles.contactTitle}>CONTACT</h1>
          </section>
        </main>
      </article>
    </Page>
  );
}

export default About;
