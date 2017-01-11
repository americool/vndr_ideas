export function sortBy (data, sortBy) { // [] , 'distance'
  const sortedData = data.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  });
  return sortedData;
}
