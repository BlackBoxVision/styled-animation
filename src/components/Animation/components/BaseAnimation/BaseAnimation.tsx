import * as animations from 'react-animations';
import styled, { keyframes } from 'styled-components';

export interface BaseAnimationProps {
  name: string;
  timing: string;
  duration: string;
  fillMode: string;
}

const BaseAnimation = styled.div<BaseAnimationProps>`
  animation: ${({ name }) => frames(name)}
    ${({ duration }) => (duration ? duration : '1s')}
    ${({ timing }) => (timing ? timing : 'ease')};
  animation-fill-mode: ${({ fillMode }) => (fillMode ? fillMode : 'forwards')};
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

BaseAnimation.displayName = 'BaseAnimation';

export default BaseAnimation;
