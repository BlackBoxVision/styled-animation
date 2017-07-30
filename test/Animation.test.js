import React from 'react';
import { shallow, render, mount } from 'enzyme';
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { Animation } from '../src/index';

const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');

global.window = dom.window;
global.document = dom.window.document;

describe("<Animation /> Mount", function() {

    this.animationProps = {
        name: "bounceOut",
        duration: "2s",
        timing: "ease",
        fillMode: "forward",
        onStart: () => console.info("onStart called!"),
        onEnd: () => console.info("onEnd called!")
    };

    it("<Animation /> has all the not DOM properties", _ => {
        const animation = shallow(<Animation {...this.animationProps}/>);
        const props = animation.props();

        // Check that props exists
        expect(props).to.have.property("name");
        expect(props).to.have.property("duration");
        expect(props).to.have.property("timing");
        expect(props).to.have.property("fillMode");

        // Check that the props has the correct type
        expect(props.name).to.be.a("string");
        expect(props.duration).to.be.a("string");
        expect(props.timing).to.be.a("string");
        expect(props.fillMode).to.be.a("string");

        // Check that the props are equal
        expect(props.name).to.equal(this.animationProps.name);
        expect(props.duration).to.equal(this.animationProps.duration);
        expect(props.timing).to.equal(this.animationProps.timing);
        expect(props.fillMode).to.equal(this.animationProps.fillMode);

    });

    it("<Animation /> has all the DOM properties", _ => {
        const animation = mount(<Animation {...this.animationProps}/>);
        const props = animation.props();

        // Check that props exists
        expect(props).to.have.property("onStart");
        expect(props).to.have.property("onEnd");

        // Check that the props has the correct type
        expect(props.onStart).to.be.a("function");
        expect(props.onEnd).to.be.a("function");

        // Check that the props are equal
        expect(props.onStart).to.equal(this.animationProps.onStart);
        expect(props.onEnd).to.equal(this.animationProps.onEnd);
    });

});