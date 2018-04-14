// @flow
import * as React from 'react';

import combineClass from 'utils/combine-class';
import styles from 'components/buttons/styles.module.css';

type Props = {
  children: React.Node,
  onClick: Function,
  className?: string
};

const StandardButton = (props: Props) => (
  <button
    onClick={props.onClick}
    className={combineClass(styles.button, props.className)}
  >
    {props.children}
  </button>
);

export default StandardButton;
