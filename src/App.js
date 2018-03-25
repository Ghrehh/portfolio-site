import React from 'react';

import data from './data';
import Projects from 'components/Projects';
import Header from 'components/Header';

import styles from 'App.module.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Projects projects={data.projects} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
