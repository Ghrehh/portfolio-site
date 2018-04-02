import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import data from './data';
import Projects from 'pages/Projects';
import About from 'pages/About';

class App extends React.Component {
  renderProjects = () => <Projects projects={data.projects} />;

  render = () => (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio.html" render={this.renderProjects} />
      </React.Fragment>
    </Router>
  );
}

export default App;
