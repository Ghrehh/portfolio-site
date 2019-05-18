// @flow
import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import * as pathConstants from 'constants/paths';
import Projects from 'pages/Projects';
import Project from 'pages/Project';
import About from 'pages/About';

class Router extends React.Component<{}> {
  render = () => (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path={pathConstants.ABOUT} component={About} />
        <Route exact path={pathConstants.PROJECTS} component={Projects} />
        <Route
          exact
          path={`${pathConstants.PROJECTS}/:project`}
          component={Project}
        />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default Router;
