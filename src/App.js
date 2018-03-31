import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import data from './data';
import Projects from 'components/Projects';
import Header from 'components/Header';

import styles from 'App.module.css';

class App extends React.Component {
  renderProjects() {
    return <Projects projects={data.projects} />
  }

  renderRouter() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" render={this.renderProjects}/>
        </React.Fragment>
      </Router>
    )
  }

  render() {
    return (
      <React.Fragment>
        <Header />

        <main>
          {this.renderRouter()}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
