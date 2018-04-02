import React from 'react';
import PropTypes from 'prop-types';

import * as oneOrManyNodesModel from 'models/one-or-many-nodes.js';
import styles from './styles.module.css';

const SubHeading = ({ children, className }) => {
  const combinedClass = `${styles.subHeading} ${className}`;

  return <h2 className={combinedClass}>{children}</h2>;
};

SubHeading.propTypes = {
  children: oneOrManyNodesModel.PropTypes.isRequired,
  className: PropTypes.string
};

export default SubHeading;
