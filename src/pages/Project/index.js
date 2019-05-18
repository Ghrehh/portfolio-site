// @flow
import React from 'react';

import { projects } from 'data';
import * as routerMatchModel from 'models/router-match';
import * as routerHistoryModel from 'models/router-history';
import SectionHeading from 'components/text/SectionHeading';
import LinkButton from 'components/buttons/Link';
import ButtonContainer from 'components/buttons/Container';
import Tags from 'components/Tags';
import Modal from './Modal';

import styles from './styles.module.css';

type Props = {
  match: routerMatchModel.Type,
  history: routerHistoryModel.Type
};

class Project extends React.Component<Props> {
  project = projects[this.props.match.params.project];

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
        onClose={() => this.props.history.go(-1)}
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

          <Tags className={styles.tags} tags={this.project.tags} />
        </section>
      </Modal>
    );
  }
}

export default Project;
