import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { mockStore } from '../../testUtils'
import App from './index';
import Review from '../../components/Review'
import Filter from '../../components/Filter'

describe('App Component', () => {

  const default_state = {
    total: 0,
  	filters: [],
  	items: []
  };
  const buildWrapper = (state) => {
    let store = mockStore({
      ...default_state,
      ...state
    });

    return mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  };

  test('render', () => {
  	const wrapper = buildWrapper();
    expect(wrapper.exists()).toBe(true);
  });

  test('element exist', () => {
  	const wrapper = buildWrapper();
    expect(wrapper.find('h4').text()).toEqual('ID: 091021');
    expect(wrapper.find('h1').text()).toEqual('La Casa de las Flores');
  });

  test('element exist with data', () => {
  	const wrapper = buildWrapper({
      total: 2,
  		items: [{}, {}]
  	});
    expect(wrapper.find('h2').text()).toEqual('2 Reviews');
    expect(wrapper.find(Review).length).toEqual(2);
  });

  test('pagination', () => {
    const wrapper = buildWrapper({
      total: 6,
      items: [{}, {}, {}, {}, {}, {}],
      page: 1,
      pages: [
        {num:1, text: 'first'},
        {num:2, text: 'next'},
        {num:6, text: 'last'}
      ]
    });
    window.scrollTo = jest.fn();

    expect(wrapper.find('nav ul li').length).toEqual(3);
    wrapper.find('nav ul li').last().simulate('click');

  });
});