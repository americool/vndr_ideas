function hasLatAndLong(value) {
  if (value.longitude && value.latitude) {
    return true;
  }
}

export function sortMapData(data) { // [] , 'distance'
  const filterData = data.filter(hasLatAndLong);
  return filterData;
}
