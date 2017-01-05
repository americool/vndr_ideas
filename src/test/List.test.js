import React from 'react';
import List from '../List';
import { shallow } from 'enzyme';

const dummyVendor = {
  vndrName: 'fake',
  description: 'even faker',
  distance: 2,
}

it('renders without crashing', () => {
  const wrapper = shallow (<List vendor={dummyVendor} />);
  expect(wrapper).toExist;
});
