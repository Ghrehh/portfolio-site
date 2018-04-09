// @flow
import * as React from 'react';
import styles from './styles.module.css';

type Props = {
  children: React.Node,
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
