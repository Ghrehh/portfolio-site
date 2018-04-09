// @flow
import React from 'react';

import * as projectsModel from 'models/data/projects';
import * as projectRouterParams from 'models/project-router-params';
import * as pathConstants from 'constants/paths';
import Page from 'components/Page';
import PageHeading from 'components/PageHeading';
import SectionHeading from 'components/SectionHeading';
import LinkButton from 'components/LinkButton';
import TransparentButton from 'components/TransparentButton';
import UnstyledLink from 'components/UnstyledLink';
import ButtonContainer from 'components/ButtonContainer';

import styles from './styles.module.css';

type Props = {
  projects: projectsModel.Type,
  match: projectRouterParams.Type
};

class Project extends React.Component<Props> {
  project() {
    return this.props.projects[this.props.match.params.project];
  }

  renderWebsiteButton() {
    // assignment necessary as flow doesn't understand the function will always return the
    // same value.
    const link = this.project().websiteLink;
    if (link === undefined) return null;

    return (
      <LinkButton external={true} link={link}>
        Website
      </LinkButton>
    );
  }

  render() {
    return (
      <Page className={styles.page} style={{ backgroundColor: this.project().backgroundColor }}>
        <div className={styles.closeButtonContainer}>
          <TransparentButton>
            <UnstyledLink link={pathConstants.PROJECTS}>
              <span className={styles.closeButton}>
                ×
              </span>
            </UnstyledLink>
          </TransparentButton>
        </div>
        <PageHeading className={styles.title}>
          {this.project().name}
        </PageHeading>

        <section className={styles.description}>
          <SectionHeading>Description</SectionHeading>
          <p className={styles.body}>{this.project().description}</p>
        </section>

        <section className={styles.links}>
          <SectionHeading>Links</SectionHeading>

          <ButtonContainer className={styles.linkButtonContainer}>
            <LinkButton external={true} link={this.project().gitHubLink}>
              GitHub
            </LinkButton>
            {this.renderWebsiteButton()}
          </ButtonContainer>
        </section>
      </Page>
    );
  }
}

export default Project;
