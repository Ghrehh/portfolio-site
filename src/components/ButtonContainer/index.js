// @flow
import React from 'react';

import * as childrenAndClassName from 'models/children-and-class-name';
import styles from './styles.module.css';

class ButtonContainer extends React.Component<childrenAndClassName.Type> {
  renderChildren = () =>
    React.Children.toArray(this.props.children).map((button, index) => (
      <div className={styles.buttonSpacer} key={index}>
        {button}
      </div>
    ));

  render = () => (
    <div className={this.props.className}>{this.renderChildren()}</div>
  );
}

export default ButtonContainer;
