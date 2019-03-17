# Styled Animation [![npm version](https://badge.fury.io/js/%40blackbox-vision%2Fstyled-animation.svg)](https://badge.fury.io/js/%40blackbox-vision%2Fstyled-animation) [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![Known Vulnerabilities](https://snyk.io/test/github/blackboxvision/styled-animation/badge.svg)](https://snyk.io/test/github/blackboxvision/styled-animation)

Handle animations with style :sunglasses:. Check out the [demo](https://blackboxvision.github.io/styled-animation/).

## Installation

### YARN

```javascript
yarn add @blackbox-vision/styled-animation
```

### NPM

```javascript
npm install --save @blackbox-vision/styled-animation
```

## Usage

### Styled-animation supports all the animations provided by [react-animations](http://react-animations.herokuapp.com/)

The usage is really simple:

```jsx
import { Animation } from '@blackbox-vision/styled-animation';
import React from 'react';
import ReactDOM from 'react-dom';

const Example = () => (
  <Animation name="fadeOutDown" duration="2s" timing="ease-out">
    Hey!, i'm animated!
  </Animation>
);

ReactDOM.render(<Example />, document.getElementById('root'));
```

Also is possible to merge multiple animations, separating each animation name by a space:

```jsx
import { Animation } from '@blackbox-vision/styled-animation';
import React from 'react';
import ReactDOM from 'react-dom';

const Example = () => (
  <Animation name="shake bounce">Hey!, i'm mixed!</Animation>
);

ReactDOM.render(<Example />, document.getElementById('root'));
```

## Props

`Animation` component use the following props:

| Properties | Types    | Default Value | Description                                          |
| ---------- | -------- | ------------- | ---------------------------------------------------- |
| name       | string   | none          | Name or names of the animations to start.            |
| duration   | string   | none          | Indicates the duration of the Animation.             |
| timing     | string   | none          | Indicates the timing of the animation.               |
| fillMode   | string   | none          | Indicates the animation-fill-mode value.             |
| onStart    | Function | none          | Callback called when the animation keyframes start.  |
| onEnd      | Function | none          | Callback called when the animation keyframes finish. |

## Issues

Please, open an [issue](https://github.com/BlackBoxVision/styled-animation/issues) following one of the issues templates. We will do our best to fix them.

## Contributing

If you want to contribute to this project see [contributing](https://github.com/BlackBoxVision/styled-animation/blob/master/CONTRIBUTING.md) for more information.

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/styled-animation/blob/master/LICENSE) for more information.
