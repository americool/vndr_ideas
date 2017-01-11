import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from '../Form';

const test_data = shallow (<Form/ >);

it('renders without crashing', () => {
  const wrapper = shallow (<Form />);
  expect(wrapper).toExist;
});

it('updates state when value is changed', () => {
  const wrapper = shallow (<Form />);
  const name_input = wrapper.find(".name-input");
  name_input.node.props.onChangeText("test")
  expect(wrapper.state().name).toEqual("test");
});
