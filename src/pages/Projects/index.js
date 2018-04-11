// @flow
import React from 'react';

import * as projectsModel from 'models/data/projects';
import * as pathConstants from 'constants/paths';
import Page from 'components/Page';
import PageHeading from 'components/PageHeading';
import LinkButton from 'components/LinkButton';
import FadeIn from 'components/FadeIn';
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
      <FadeIn timeout={0}>
        <Page>
          <PageHeading className={styles.title}>PROJECTS</PageHeading>
          <div className={styles.buttonContainer}>
            <LinkButton link={pathConstants.ABOUT}>⇦ Return</LinkButton>
          </div>

          {this.renderProjects()}
        </Page>
      </FadeIn>
    );
  }
}

export default Projects;
