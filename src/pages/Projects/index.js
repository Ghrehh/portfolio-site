// @flow
import React from 'react';

import * as projectsModel from 'models/data/projects';
import Page from 'components/Page';
import PageHeading from 'components/PageHeading';
import Project from './Project';

import styles from './styles.module.css';

class Projects extends React.Component<{ projects: projectsModel.Type }> {
  renderProjects() {
    return Object.keys(this.props.projects).map(key => (
      <Project project={this.props.projects[key]} key={key} path={key} />
    ));
  }

  render() {
    return (
      <Page>
        <PageHeading className={styles.title}>PROJECTS</PageHeading>
        {this.renderProjects()}
      </Page>
    );
  }
}

export default Projects;
