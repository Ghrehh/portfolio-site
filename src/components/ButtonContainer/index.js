import React from 'react';
import PropTypes from 'prop-types';

import * as oneOrManyNodesModel from 'models/one-or-many-nodes.js';
import styles from './styles.module.css';

class ButtonContainer extends React.Component {
  renderChildren = () =>
    this.props.children.map((button, index) => (
      <div className={styles.buttonSpacer} key={index}>
        {button}
      </div>
    ));

  render = () => (
    <div className={this.props.className}>{this.renderChildren()}</div>
  );
}

ButtonContainer.propTypes = {
  children: oneOrManyNodesModel.PropTypes.isRequired,
  className: PropTypes.string
};

export default ButtonContainer;
