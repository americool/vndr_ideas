export function sortBy(data, sortType) { // [] , 'distance'
  const sortedData = data.sort((a, b) => {
    if (a[sortType] < b[sortType]) {
      return -1;
    }
    if (a[sortType] > b[sortType]) {
      return 1;
    }
    return 0;
  });
  return sortedData;
}
