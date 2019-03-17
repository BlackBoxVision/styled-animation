import React from 'react';
import { getEndEvent, getStartEvent } from '../../helpers';
import BaseAnimation from './components/BaseAnimation';

export interface AnimationProps {
  name: string;
  timing: string;
  duration: string;
  fillMode: string;
  children?: any;
  onEnd: Function;
  onStart: Function;
}

class Animation extends React.Component<AnimationProps> {
  static displayName = 'Animation';

  element = null;

  componentDidMount() {
    if (this.element) {
      this.element.addEventListener(getStartEvent(), this.props.onStart);
      this.element.addEventListener(getEndEvent(), this.props.onEnd);
    }
  }

  componentWillUnmount() {
    if (this.element) {
      this.element.removeEventListener(getStartEvent(), this.props.onStart);
      this.element.removeEventListener(getEndEvent(), this.props.onEnd);
      this.element = null;
    }
  }

  setElement = element => {
    this.element = element;
  };

  render() {
    const { children, ...animationProps } = this.props;

    return (
      <BaseAnimation {...animationProps} ref={this.setElement}>
        {children}
      </BaseAnimation>
    );
  }
}

export default Animation;
