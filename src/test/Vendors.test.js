/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Vendors from '../Vendors';

it('renders without crashing', () => {
  const wrapper = shallow(<Vendors />);
  expect(wrapper).toExist;
});
