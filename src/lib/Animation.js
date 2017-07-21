import React from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import * as animations from 'react-animations';

import { whichStartEvent, whichEndEvent } from './Helper';

const mergeAnimations = (animationArray) => animationArray.reduce((prev, next, index) => animations.merge(index? prev : animations[prev], animations[next]));

const frames = (name) => {
    const selectedAnimations = name.split(" ");
    return keyframes`${selectedAnimations.length > 1? mergeAnimations(selectedAnimations) : animations[name]}`;
};

const Animation = styled.div`
    animation: ${({name}) => frames(name)} ${({duration}) => duration? duration : "1s"} ${({timing}) => timing? timing : "ease"};
    animation-fill-mode: ${({fillMode}) => fillMode? fillMode : "forwards"};
`;

class AnimationContainer extends React.Component {

    _setAnimationLifeCycle = ref => {
        if(ref) {
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
            fillMode
        };

        return (
            <Animation ref={animation => this._setAnimationLifeCycle(animation)} {...animationProps} >
                {children}
            </Animation>
        )
    }
}

export default AnimationContainer;