// @flow
import React from 'react';
import type { Element } from 'react';

import Button from 'components/Button';
import styles from './styles.module.css';

type Props = {
  children: Element<typeof Button>[],
  className?: string
};

class ButtonContainer extends React.Component<Props> {
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
