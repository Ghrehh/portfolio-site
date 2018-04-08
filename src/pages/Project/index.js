// @flow
import React from 'react';

import * as projectsModel from 'models/data/projects';
import * as projectRouterParams from 'models/project-router-params';
import Page from 'components/Page';
import PageHeading from 'components/PageHeading';

import styles from './styles.module.css';

type Props = {
  projects: projectsModel.Type,
  match: projectRouterParams.Type
};

class Project extends React.Component<Props> {
  project() {
    return this.props.projects[this.props.match.params.project];
  }

  render() {
    return (
      <Page style={{ backgroundColor: this.project().backgroundColor }}>
        <PageHeading className={styles.title}>
          {this.project().name}
        </PageHeading>
      </Page>
    );
  }
}

export default Project;
