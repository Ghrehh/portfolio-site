// @flow
import React from 'react';

import * as projectsModel from 'models/data/projects';
import * as projectRouterParams from 'models/project-router-params';
import SectionHeading from 'components/text/SectionHeading';
import LinkButton from 'components/buttons/Link';
import ButtonContainer from 'components/ButtonContainer';
import Modal from './Modal';

import styles from './styles.module.css';

type Props = {
  projects: projectsModel.Type,
  match: projectRouterParams.Type
};

class Project extends React.Component<Props> {
  project = this.props.projects[this.props.match.params.project];

  renderWebsiteButton() {
    if (this.project.websiteLink === undefined) return null;

    return (
      <LinkButton external={true} link={this.project.websiteLink}>
        Website
      </LinkButton>
    );
  }

  render() {
    return (
      <Modal
        backgroundColor={this.project.backgroundColor}
        heading={this.project.name}
      >
        <section className={styles.description}>
          <SectionHeading>Description</SectionHeading>
          <p className={styles.body}>{this.project.description}</p>
        </section>

        <section className={styles.links}>
          <SectionHeading>Links</SectionHeading>

          <ButtonContainer className={styles.linkButtonContainer}>
            <LinkButton external={true} link={this.project.gitHubLink}>
              GitHub
            </LinkButton>
            {this.renderWebsiteButton()}
          </ButtonContainer>
        </section>
      </Modal>
    );
  }
}

export default Project;
