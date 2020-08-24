import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Filter from './index';

describe('Filter Component', () => { 
  test('render', () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper.exists()).toBe(true);
  });

  test('render correctly with data one', () => {
    const mockData = [
      {type: 'score', value: 1},
      {type: 'score', value: 3}
    ];
    const wrapper = shallow(<Filter items={mockData} />);

    expect(wrapper.find('strong').text()).toEqual('Filtered By:');
    expect(wrapper.find('div button').length).toEqual(2);
    expect(wrapper.find('div > button').first().find('b').text()).toEqual('1');
    expect(wrapper.find('div > button').last().find('b').text()).toEqual('3');
  });

  test('render correctly with data two', () => {
    const mockData = [
      {type: 'score', value: 1},
      {type: 'channel', value: 'HOLIDU'}
    ];
    const wrapper = shallow(<Filter items={mockData} />);

    expect(wrapper.find('strong').text()).toEqual('Filtered By:');
    expect(wrapper.find('div button').length).toEqual(2);
    expect(wrapper.find('div > button').first().find('b').text()).toEqual('1');
    expect(wrapper.find('div > button').last().find('img').exists()).toBe(true);
  });

  test('render correctly with data two', () => {
    const mockData = [
      {type: 'score', value: 1},
      {type: 'channel', value: 'HOLIDU'}
    ];
    const wrapper = shallow(<Filter items={mockData}/>);
    expect(wrapper.find('strong').text()).toEqual('Filtered By:');
    expect(wrapper.find('div button').length).toEqual(2);
    expect(wrapper.find('div > button').first().find('b').text()).toEqual('1');
    expect(wrapper.find('div > button').last().find('img').exists()).toBe(true);
  });

  test('onClick should workd', () => {
    const onCloseMock = jest.fn();
    const mockData = [
      {type: 'score', value: 1},
      {type: 'channel', value: 'HOLIDU'}
    ];
    const wrapper = shallow(<Filter items={mockData} onClick={onCloseMock} />);
    wrapper.find('div > button').first().find('span.badge').simulate('click');
    expect(onCloseMock).toHaveBeenCalled();

    wrapper.find('div > button').last().find('span.badge').simulate('click');
    expect(onCloseMock).toHaveBeenCalled();
  });
});