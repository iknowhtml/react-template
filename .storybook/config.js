import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import GlobalStyles from '../src/components/GlobalStyles';
const req = require.context('../src', true, /.stories.js$/);

const loadStories = () => {
  for (const filename of req.keys()) {
    req.keys().forEach(filename => req(filename));
  }
};

const withGlobal = cb => (
  <>
    <GlobalStyles />
    {cb()}
  </>
);

addDecorator(withGlobal);
configure(loadStories, module);
