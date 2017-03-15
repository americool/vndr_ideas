function hasLatAndLong(value) {
  return value.longitude && value.latitude;
}

export function sortMapData(data) { // [] , 'distance'
  const filterData = data.filter(hasLatAndLong);
  return filterData;
}
