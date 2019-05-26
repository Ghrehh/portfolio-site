// @flow
import React from 'react';

import { projects } from 'data';
import * as pathConstants from 'constants/paths';
import Page from 'components/Page';
import PageHeading from 'components/text/PageHeading';
import LinkButton from 'components/buttons/Link';
import FadeIn from 'components/animation/FadeIn';
import Project from './Project';

import styles from './styles.module.css';

class Projects extends React.Component<{}> {
  renderProjects() {
    return projects.map(project => (
      <Project project={project} key={project.slug} path={project.slug} />
    ));
  }

  render() {
    return (
      <FadeIn>
        <Page>
          <header className={styles.header}>
            <PageHeading className={styles.title}>PROJECTS</PageHeading>
            <p className={styles.headerBody}>
              See below for a selection of my open-source projects. Click on a
              project for more information.
            </p>
          </header>
          <div className={styles.buttonContainer}>
            <LinkButton link={pathConstants.ABOUT}>Back</LinkButton>
          </div>

          {this.renderProjects()}
        </Page>
      </FadeIn>
    );
  }
}

export default Projects;
