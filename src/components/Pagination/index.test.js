import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Pagination from './index';

describe('Pagination Component', () => { 
  test('render', () => {
    const wrapper = shallow(<Pagination />);
    expect(wrapper.exists()).toBe(true);
  });

  test('render correctly with data', () => {
    const mockData = [
      {text: 'first', num: 1},
      {text: 'next', num: 2}
    ];
    const wrapper = shallow(<Pagination items={mockData} />);

    expect(wrapper.find('ul li').length).toEqual(2);
    expect(wrapper.find('ul li').first().find('button').text()).toEqual('first');
    expect(wrapper.find('ul li').last().find('button').text()).toEqual('next');
  });

  test('onClick should workd', () => {
    const onCloseMock = jest.fn();
    const mockData = [
      {text: 'first', num: 1},
      {text: 'next', num: 2},
      {text: '3', num: 3}
    ];
    const wrapper = shallow(<Pagination items={mockData} active={3} onClick={onCloseMock} />);
    wrapper.find('ul li').first().simulate('click');
    expect(onCloseMock).toHaveBeenCalled();
    wrapper.find('ul li').last().simulate('click');
    expect(onCloseMock.mock.calls.length).toBe(1);
  });
});