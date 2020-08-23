import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import Moment from 'react-moment';
import Review from './index';

describe('Review Component', () => { 
  test('render', () => {
    const wrapper = shallow(<Review />);
    expect(wrapper.exists()).toBe(true);
  });

  test('render correctly with data one', () => {
    const mockData = {
      headline: "Amazing Pool!",
      comment: "Mauris justo ante, pulvinar eget consequat at, bibendum et lorem. Suspendisse lacus urna, fringilla sit amet commodo eget, condimentum et nisl. Pellentesque elit mi, porta in mi at, vulputate mattis lacus.",
      author: "Alissa Stacey",
      positiveFeedback: "The location is perfect",
      negativeFeedback: "We had to wait for 1h for the check-in.",
      score: 4.1,
      channel: "AIRBNB",
      publishedAt: "2020-08-11T12:20:02.340Z"
    };
    const wrapper = mount(<Review {...mockData} />);
    expect(wrapper.find('header').length).toEqual(1);
    expect(wrapper.find('header h5').text()).toEqual('Amazing Pool!');
    expect(wrapper.find('header .badge b').text()).toEqual('4.1');

    expect(wrapper.find('summary').length).toEqual(1);
    expect(wrapper.find('summary ul li').length).toEqual(2);
    expect(wrapper.find('summary ul li:first-child').text().trim()).toEqual('The location is perfect');
    expect(wrapper.find('summary ul li:last-child').text().trim()).toEqual('We had to wait for 1h for the check-in.');

    expect(wrapper.find('footer').length).toEqual(1);
    expect(wrapper.find('footer strong').text()).toEqual('Alissa Stacey');
    expect(wrapper.find('footer').find(Moment).length).toEqual(1);
    expect(wrapper.find('footer time span').text()).toEqual('11 Aug 2020');
  });

  test('render correctly with data two', () => {
    const mockData = {
      headline: "We had a blast",
      comment: "Mauris justo ante, pulvinar eget consequat at, bibendum et lorem. Suspendisse lacus urna, fringilla sit amet commodo eget, condimentum et nisl. Pellentesque elit mi, porta in mi at, vulputate mattis lacus.",
      author: "Alissa Stacey",
      positiveFeedback: "The location is perfect",
      negativeFeedback: null,
      score: 4.4,
      channel: "AIRBNB",
      publishedAt: "2020-08-11T12:20:02.340Z"
    };
    const wrapper = mount(<Review {...mockData} />);

    expect(wrapper.find('header h5').text()).toEqual('We had a blast');
    expect(wrapper.find('header .badge b').text()).toEqual('4.4');
    expect(wrapper.find('summary ul li').length).toEqual(1);
    expect(wrapper.find('summary ul li:first-child').text().trim()).toEqual('The location is perfect');
  });
});