// @flow
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './styles.module.css';

type Props = {
  timeout: number,
  children: React.Node
};

const FadeIn = (props: Props) => (
  <CSSTransition
    timeout={props.timeout}
    classNames={{
      appear: styles.slideDown,
      enterDone: styles.slideDownFinished,
      exitActive: styles.fadeInExit
    }}
    in={true}
    appear={true}
  >
    {props.children}
  </CSSTransition>
);

FadeIn.defaultProps = {
  timeout: 0
};

export default FadeIn;
