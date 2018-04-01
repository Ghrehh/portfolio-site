import React from 'react';
import PropTypes from 'prop-types';

import Page from 'components/Page';

import styles from './styles.module.css';

class Projects extends React.Component {
  renderProjects() {
    return this.props.projects.map((project, index) => (
      <section
        className={styles.project}
        key={index}
        style={{ backgroundColor: project.backgroundColor }}
      >
        <h2 className={styles.name}>{project.name}</h2>
        <p className={styles.description}>{project.description}</p>
      </section>
    ));
  }

  render() {
    return (
      <Page>
        <article>
          <header>
            <h2 className={styles.header}>PROJECTS</h2>
          </header>

          {this.renderProjects()}
        </article>
      </Page>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired
};

export default Projects;
