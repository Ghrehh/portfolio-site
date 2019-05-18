// @flow
import React from 'react';

import * as projectModel from 'models/data/project';
import * as pathConstants from 'constants/paths';
import SectionHeading from 'components/text/SectionHeading';
import Card from 'components/Card';
import LinkButton from 'components/buttons/Link';

import styles from './styles.module.css';

type Props = {
  project: projectModel.Type,
  path: string
};

const Project = (props: Props) => (
  <Card
    style={{ backgroundColor: props.project.backgroundColor }}
    className={styles.project}
  >
    <SectionHeading className={styles.projectName}>
      {props.project.name}
    </SectionHeading>

    <p className={styles.projectBody}>{props.project.description}</p>

    <LinkButton
      className={styles.button}
      link={`${pathConstants.PROJECTS}/${props.path}`}
    >
      More Info
    </LinkButton>
  </Card>
);

export default Project;
