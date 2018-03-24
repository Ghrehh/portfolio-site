import React from 'react';

import data from './data';
import Projects from 'components/Projects';

import styles from 'App.module.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1 className={styles.header}>Hey, I'm Gerard Burns a web developer from Belfast.</h1>
        <Projects projects={data.projects} />
      </main>
    );
  }
}

export default App;
