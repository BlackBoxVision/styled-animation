# Styled Animation
> Handle animations with style :sunglasses:.

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![npm version](https://badge.fury.io/js/styled-animation.svg)](https://badge.fury.io/js/styled-animation) [![npm downloads](https://img.shields.io/npm/dm/styled-animation.svg)](https://www.npmjs.com/package/styled-animation) [![Known Vulnerabilities](https://snyk.io/test/github/blackboxvision/styled-animation/badge.svg)](https://snyk.io/test/github/blackboxvision/styled-animation)

[![NPM](https://nodei.co/npm/styled-animation.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/styled-animation/) [![NPM](https://nodei.co/npm-dl/styled-animation.png?months=9&height=2)](https://nodei.co/npm/styled-animation/) 

## Installation

**YARN**

```javascript
yarn add styled-animation
```

**NPM**

```javascript
npm install --save styled-animation
```

## Usage

### Styled-animation supports all the animations provided by [react-animations](http://react-animations.herokuapp.com/)

The usage is really simple:

```jsx
import { Animation } from 'styled-animation';
import React from 'react';
import ReactDOM from 'react-dom';

const Example = () => (
    <Animation name="fadeOutDown" duration="2s" timing="ease-out">
        Hey!, i'm animated!
    </Animation>
);

ReactDOM.render(<Example />, document.getElementById("root"));
```

Also is possible to merge multiple animations, separating each animation name by a space:

```jsx
import { Animation } from 'styled-animation';
import React from 'react';
import ReactDOM from 'react-dom';

const Example = () => (
    <Animation name="shake bounce">
        Hey!, i'm mixed!
    </Animation>
);

ReactDOM.render(<Example />, document.getElementById("root"));
```
## Props

| Prop  |  Description  |
|---|---|
| name: String  | Name or names of the animations to start  |
| duration: String  | Indicates the duration of the animation  |
| timing: String  | Indicates the timing of the animation  |
| fillMode: String  | Indicates the animation-fill-mode value  |
| onStart: Function  | Callback called when the animation keyframes start |
| onEnd: Function  | Callback called when the animation keyframes finish |


## Issues

If you found a bug, or you have an answer, or whatever. Please, open an [issue](https://github.com/BlackBoxVision/styled-animation/issues). We will do our best to fix it.

## Contributing

Of course, if you see something that you want to upgrade from this library, or a bug that needs to be solved, **PRs are welcome!**

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/styled-animation/blob/master/LICENSE) for more information.
