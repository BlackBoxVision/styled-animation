# Styled Animation
> Handle animations with style :sunglasses:.

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



## Issues

If you found a bug, or you have an answer, or whatever. Please, open an [issue](https://github.com/BlackBoxVision/styled-animation/issues). I will do the best to fix it, or help you.

## Contributing

Of course, if you see something that you want to upgrade from this library, or a bug that needs to be solved, **PRs are welcome!**

## License

Distributed under the **MIT license**. See [LICENSE](https://github.com/BlackBoxVision/styled-animation/blob/master/LICENSE) for more information.
