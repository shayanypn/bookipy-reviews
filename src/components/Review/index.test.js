import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Review from './index';

describe('Review Component', () => { 
  test('render', () => {
  	const wrapper = shallow(<Review />);
    expect(wrapper.exists()).toBe(true);
  });

  test('element exist', () => {
    const wrapper = shallow(<Review />);
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('summary').length).toEqual(1);
    expect(wrapper.find('footer').length).toEqual(1);
    expect(wrapper.find('h5').text()).toEqual('Very nice host, and quite chill place.!');

    expect(wrapper.find('footer strong').text()).toEqual('Alissa Stacey');
    expect(wrapper.find('footer time').text()).toEqual('Reviewed 13 December 2019');
  });
});