import { sortBy } from '../helpers/sorted';

const fakeObjects = [
  {
    value: 'Two',
    sortIndex: 0.2
  },
  {
    value: 'Three',
    sortIndex: 0.3
  },
  {
    value: 'One',
    sortIndex: 0.1
  },
  {
    value: 'Five',
    sortIndex: 0.5
  },
  {
    value: 'Four',
    sortIndex: 0.4
  },
];


it('sorts correctly', () => {
  const sortedList = sortBy(fakeObjects, 'sortIndex');
  expect(sortedList[0].value).toEqual('One');
  expect(sortedList[1].value).toEqual('Two');
  expect(sortedList[2].value).toEqual('Three');
  expect(sortedList[3].value).toEqual('Four');
  expect(sortedList[4].value).toEqual('Five');
});
