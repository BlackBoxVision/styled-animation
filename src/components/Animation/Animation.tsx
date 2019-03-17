import React from 'react';
import * as animations from 'react-animations';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { whichEndEvent, whichStartEvent } from '../../helpers';

const Animation = styled.div`
  animation: ${props => frames(props.name)}
    ${props => (props.duration ? props.duration : '1s')}
    ${props => (props.timing ? props.timing : 'ease')};
  animation-fill-mode: ${props =>
    props.fillMode ? props.fillMode : 'forwards'};
`;

const mergeAnimations = animationArray =>
  animationArray.reduce((prev, next, index) =>
    animations.merge(index ? prev : animations[prev], animations[next])
  );

const frames = name => {
  const selectedAnimations = name.split(' ');
  return keyframes`${
    selectedAnimations.length > 1
      ? mergeAnimations(selectedAnimations)
      : animations[name]
  }`;
};

export interface AnimationContainerProps {
  onEnd: Function;
  onStart: Function;
  children?: any;
  name?: any;
  duration?: any;
  timing?: any;
  fillMode?: any;
}

class AnimationContainer extends React.Component<AnimationContainerProps> {
  static displayName = 'AnimationContainer';

  _setAnimationLifeCycle = ref => {
    if (ref) {
      const { onStart, onEnd } = this.props;

      const node = ReactDOM.findDOMNode(ref);
      node.addEventListener(whichStartEvent(), onStart);
      node.addEventListener(whichEndEvent(), onEnd);
    }
  };

  render() {
    const { children, name, duration, timing, fillMode } = this.props;
    const animationProps = {
      name,
      duration,
      timing,
      fillMode,
    };

    return (
      <Animation
        ref={animation => this._setAnimationLifeCycle(animation)}
        {...animationProps}
      >
        {children}
      </Animation>
    );
  }
}

export default AnimationContainer;
