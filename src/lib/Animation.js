import styled, { keyframes } from 'styled-components';

import * as animations from 'react-animations';

const mergeAnimations = (animationArray) => animationArray.reduce((prev, next, index) => animations.merge(index? prev : animations[prev], animations[next]));

const frames = (name) => {
    const selectedAnimations = name.split(" ");
    return keyframes`${selectedAnimations.length > 1? mergeAnimations(selectedAnimations) : animations[name]}`;
};

const Animation = styled.div`
    animation: ${({name}) => frames(name)} ${({duration}) => duration? duration : "1s"} ${({timing}) => timing? timing : "ease"};
`;

export default Animation;