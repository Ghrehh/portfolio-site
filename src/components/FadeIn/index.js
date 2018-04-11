// @flow
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './styles.module.css';

type Props = {
  timeout: number,
  children: React.Node
};

const Transition = (props: Props) => (
  <CSSTransition
    timeout={props.timeout}
    classNames={{
      appear: styles.slideDown,
      enterDone: styles.slideDownFinished
    }}
    in={true}
    appear={true}
  >
    {props.children}
  </CSSTransition>
);

Transition.defaultProps = {
  timeout: 0
};

export default Transition;
