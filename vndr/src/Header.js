//import libraries for making a Component
import React from 'react';
import { Text, View } from 'react-native';

//make Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{ props.headerName }</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#daa520',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 28
  }
};

// make the Component available to rest of application
export default Header;
