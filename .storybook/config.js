import { withInfo } from '@storybook/addon-info';
import { addDecorator, addParameters, configure } from '@storybook/react';

addParameters({
  options: {
    brandTitle: '@blackbox-vision/styled-animation',
  },
});

addDecorator(withInfo({ inline: true, header: false }));

const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
