// @flow
import React from 'react';

import * as projectModel from 'models/data/project';
import SectionHeading from 'components/SectionHeading';

import styles from './styles.module.css';

const Projects = (props: { project: projectModel.Type }) => (
  <div className={styles.project}>
    <div
      style={{ backgroundColor: props.project.backgroundColor }}
      className={styles.projectInner}
    >
      <SectionHeading className={styles.projectName}>
        {props.project.name}
      </SectionHeading>
      <p className={styles.projectBody}>{props.project.description}</p>
    </div>
  </div>
);

export default Projects;
