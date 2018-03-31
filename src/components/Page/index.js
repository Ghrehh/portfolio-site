import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';

class Page extends React.Component {
  render() {
    return (
      <article>
        <header>
          <h2 className={styles.header}>
            PROJECTS
          </h2>
          <div className={styles.headerUnderline} />
        </header>

        <div className={styles.projects}>
          {this.renderPage()}
        </div>
      </article>
    );
  }
}

Page.propTypes = {
  projects: PropTypes.array.isRequired
}

export default Page;

