// @flow
import React from 'react';

import * as projectModel from 'models/data/project';
import * as pathConstants from 'constants/paths';
import SectionHeading from 'components/SectionHeading';
import UnstyledLink from 'components/UnstyledLink';

import styles from './styles.module.css';

type Props = {
  project: projectModel.Type,
  path: string
};

const Project = (props: Props) => (
  <div className={styles.project}>
    <UnstyledLink link={`${pathConstants.PROJECTS}/${props.path}`}>
      <div
        style={{ backgroundColor: props.project.backgroundColor }}
        className={styles.projectInner}
      >
        <SectionHeading className={styles.projectName}>
          {props.project.name}
        </SectionHeading>
        <p className={styles.projectBody}>{props.project.description}</p>
      </div>
    </UnstyledLink>
  </div>
);

export default Project;
