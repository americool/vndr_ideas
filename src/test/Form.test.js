/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import Form from '../Form';

it('renders without crashing', () => {
  const wrapper = shallow(<Form />);
  expect(wrapper).toExist;
});

it('updates state when value is changed', () => {
  const wrapper = shallow(<Form />);
  const nameInput = wrapper.find('.name-input');
  nameInput.node.props.onChangeText('test');
  expect(wrapper.state().name).toEqual('test');
});
