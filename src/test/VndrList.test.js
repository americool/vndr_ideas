/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import VndrList from '../VndrList';

it('renders without crashing', () => {
  const wrapper = shallow(<VndrList />);
  expect(wrapper).toExist;
});
