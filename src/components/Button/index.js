import React from 'react';
import PropTypes from 'prop-types';

import * as oneOrManyNodesModel from 'models/one-or-many-nodes.js';
import styles from './styles.module.css';

const Button = ({ children, className }) => {
  const combinedClass = `${styles.button} ${className}`;

  return <button className={combinedClass}>{children}</button>;
};

Button.propTypes = {
  children: oneOrManyNodesModel.PropTypes.isRequired,
  className: PropTypes.string
};

export default Button;
