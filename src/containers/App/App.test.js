import React from 'react';
import { shallow } from 'enzyme';
import App from './index';

describe('App Component', () => {
  test('render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});