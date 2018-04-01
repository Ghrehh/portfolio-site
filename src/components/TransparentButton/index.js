import React from 'react';

import * as oneOrManyNodesModel from 'models/one-or-many-nodes.js';
import styles from './styles.module.css';

const TransparentButton = ({ children }) => (
  <button className={styles.button}>{children}</button>
);

TransparentButton.propTypes = {
  children: oneOrManyNodesModel.PropTypes.isRequired
};

export default TransparentButton;
