// @flow
import * as React from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './styles.module.css';

type Props = {
  timeout: number,
  children: React.Node
};

const SlideUp = (props: Props) => (
  <CSSTransition
    timeout={props.timeout}
    classNames={{
      appear: styles.slideUp,
      enterDone: styles.slideUpFinished
    }}
    in={true}
    appear={true}
  >
    {props.children}
  </CSSTransition>
);

SlideUp.defaultProps = {
  timeout: 0
};

export default SlideUp;
