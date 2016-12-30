//import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';
import Vendors from './Vendors'

//make Component
const List = ({vendor}) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{`${vendor.vndrName} | ${vendor.description} | ${vendor.distance} mi.`}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 12
  }
};

// make the Component available to rest of application
export default List;
