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
  	const review = {
  		...default_state,
  		...state
  	};
    let store = mockStore({ review });

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
    expect(wrapper.find('h2').text()).toEqual('0 Review');
  });

  test('element exist with data', () => {
  	const wrapper = buildWrapper({
      total: 2,
  		items: [{}, {}]
  	});
    expect(wrapper.find('h2').text()).toEqual('2 Reviews');
    expect(wrapper.find(Review).length).toEqual(2);
  });
});