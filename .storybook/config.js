import { addParameters, configure } from '@storybook/react';

addParameters({
  options: {
    brandTitle: '@blackbox-vision/styled-animation',
  },
});

const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
