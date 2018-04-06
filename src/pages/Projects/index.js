// @flow
import React from 'react';

import * as projectModel from 'models/data/project';
import Page from 'components/Page';

import styles from './styles.module.css';

type Props = {
  projects: projectModel.Type[]
};

class Projects extends React.Component<Props> {
  renderProjects() {
    return this.props.projects.map((project, index) => (
      <section
        className={styles.project}
        key={index}
        style={{ backgroundColor: project.backgroundColor }}
      >
        <h2 className={styles.name}>{project.name}</h2>
        <p className={styles.description}>{project.description}</p>
      </section>
    ));
  }

  render() {
    return (
      <Page>
        <header>
          <h2 className={styles.header}>PROJECTS</h2>
        </header>

        {this.renderProjects()}
      </Page>
    );
  }
}

export default Projects;
