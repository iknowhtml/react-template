import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('App', () => {
  it('should render the App component', () => {
    shallow(<App />);
  });
});
