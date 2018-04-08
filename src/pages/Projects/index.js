// @flow
import React from 'react';

import * as projectModel from 'models/data/project';
import Page from 'components/Page';
import Card from 'components/Card';
import PageHeading from 'components/PageHeading';

import styles from './styles.module.css';

type Props = {
  projects: projectModel.Type[]
};

class Projects extends React.Component<Props> {
  renderProjects() {
    return this.props.projects.map((project, index) => (
      <Card key={index}>
        <h2 className={styles.name}>{project.name}</h2>
        <p className={styles.description}>{project.description}</p>
      </Card>
    ));
  }

  render() {
    return (
      <Page>
        <PageHeading>PROJECTS</PageHeading>

        {this.renderProjects()}
      </Page>
    );
  }
}

export default Projects;
