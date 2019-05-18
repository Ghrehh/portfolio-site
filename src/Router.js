// @flow
import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import data from './data';
import * as projectRouterParams from 'models/project-router-params';
import * as pathConstants from 'constants/paths';
import Projects from 'pages/Projects';
import Project from 'pages/Project';
import About from 'pages/About';

class Router extends React.Component<{}> {
  renderProjects = () => <Projects projects={data.projects} />;

  renderProject = ({ match }: { match: projectRouterParams.Type }) => (
    <Project match={match} projects={data.projects} />
  );

  render = () => (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path={pathConstants.ABOUT} component={About} />
        <Route
          exact
          path={pathConstants.PROJECTS}
          render={this.renderProjects}
        />
        <Route
          exact
          path={`${pathConstants.PROJECTS}/:project`}
          render={this.renderProject}
        />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default Router;
