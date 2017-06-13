import React from 'react';
import { storiesOf } from '@storybook/react';
import { Animation } from '../src';

const animationList = [
    "bouceOut",
    "bounce",
    "bounceIn",
    "bounceInDown",
    "bounceInLeft",
    "bounceInRight",
    "bounceInUp",
    "bounceOutDown",
    "bounceOutLeft",
    "bounceOutRight",
    "bounceOutUp",
    "fadeIn",
    "fadeInDown",
    "fadeInDownBig",
    "fadeInLeft",
    "fadeInLeftBig",
    "fadeInRight",
    "fadeInRightBig",
    "fadeInUp",
    "fadeInUpBig",
    "fadeOut",
    "fadeOutDown",
    "fadeOutDownBig",
    "fadeOutLeft",
    "fadeOutLeftBig",
    "fadeOutRight",
    "fadeOutRightBig",
    "fadeOutUp",
    "fadeOutUpBig",
    "flash",
    "flip",
    "flipInX",
    "flipInY",
    "flipOutX",
    "flipOutY",
    "headShake",
    "hinge",
    "jello",
    "lightSpeedIn",
    "lightSpeedOut",
    "pulse",
    "rollIn",
    "rollOut",
    "rotateIn",
    "rotateInDownLeft",
    "rotateInDownRight",
    "rotateInUpLeft",
    "rotateInUpRight",
    "rotateOut",
    "rotateOutDownLeft",
    "rotateOutDownRight",
    "rotateOutUpLeft",
    "rotateOutUpRight",
    "rubberBand",
    "shake",
    "slideInDown",
    "slideInLeft",
    "slideInRight",
    "slideInUp",
    "slideOutDown",
    "slideOutLeft",
    "slideOutRight",
    "slideOutUp",
    "swing",
    "tada",
    "wobble",
    "zoomIn",
    "zoomInDown",
    "zoomInLeft",
    "zoomInRight",
    "zoomInUp",
    "zoomOut",
    "zoomOutDown",
    "zoomOutLeft",
    "zoomOutRight",
    "zoomOutUp"
];

const stories = storiesOf('Animation', module);

animationList.forEach(animation => stories.add(animation, () => (
    <div style={{textAlign: "center", paddingTop: "200px"}}>
        <Animation name={animation}>
            Hey!, i'm animated
        </Animation>
    </div>
)));

