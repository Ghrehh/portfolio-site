import React from 'react';
import PropTypes from 'prop-types';

import * as oneOrManyNodesModel from 'models/one-or-many-nodes.js';
import styles from './styles.module.css';

const Heading = ({ children, className }) => {
  const combinedClass = `${styles.heading} ${className}`;

  return <h1 className={combinedClass}>{children}</h1>;
};

Heading.propTypes = {
  children: oneOrManyNodesModel.PropTypes.isRequired,
  className: PropTypes.string
};

export default Heading;
