import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class Projects extends React.Component {
  renderProjects() {
    return this.props.projects.map((project, index) => (
      <section key={index}>
        <h2 className={styles.name}>{project.name}</h2>
        <p>{project.description}</p>
      </section>
    ));
  }

  render() {
    return (
      <article className={styles.projects}>{this.renderProjects()}</article>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired
}

export default Projects;
