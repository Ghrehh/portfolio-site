// @flow
import React from 'react';

import * as projectModel from 'models/data/project';
import Page from 'components/Page';
import PageHeading from 'components/PageHeading';
import Project from './Project';

import styles from './styles.module.css';

class Projects extends React.Component<{ projects: projectModel.Type[] }> {
  renderProjects() {
    return this.props.projects.map((project, index) => (
      <Project project={project} key={index} />
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
