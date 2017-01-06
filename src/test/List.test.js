import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import List from '../List';


const dummyVendor = {
  vndrName: 'fake',
  description: 'even faker',
  distance: 2,
};

// it('renders without crashing', () => {
//   const wrapper = renderer.create(<List vendor={dummyVendor} />).toJSON();
//   expect(wrapper).toMatchSnapshot();
// });

it('renders without crashing', () => {
  const wrapper = shallow (<List vendor={dummyVendor} />);
  expect(wrapper).toExist;
});
