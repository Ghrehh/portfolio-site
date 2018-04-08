// @flow
import * as React from 'react';

import Button from 'components/Button';
import LinkButton from 'components/LinkButton';
import styles from './styles.module.css';

type ButtonTypes = typeof Button | typeof LinkButton;

type Props = {
  children: React.Element<ButtonTypes>[],
  className?: string
};

class ButtonContainer extends React.Component<Props> {
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

export default ButtonContainer;
