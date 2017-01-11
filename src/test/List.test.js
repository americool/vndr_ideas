import React from 'react';
import { shallow } from 'enzyme';
import List from '../List';


const dummyVendor = {
  vndrName: 'fake',
  description: 'even faker',
  distance: 2,
};


it('renders without crashing', () => {
  const wrapper = shallow(<List vendor={dummyVendor} />);
  expect(wrapper).toExist;
});

it('displays vendor name/descrip/etc', () => {
  const wrapper = shallow (<List vendor={dummyVendor} />);
  expect(wrapper.props().children.props.children).toEqual('fake | even faker | 2 mi.');
});
