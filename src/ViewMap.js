import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';
import { Button, Card, CardSection } from './common';

class ViewMap extends Component {
  
  render() {
    return (
      <Card>
        <CardSection>
          <MapView
            style={{ flex: 1, height: 450 }}
            showsUserLocation
            initialRegion={{
              latitude: 40.455069,
              longitude: -80.023101,
              latitudeDelta: 0.019,
              longitudeDelta: 0.019,
            }}
          />
        </CardSection>
        <CardSection>
          <Button onPress={() => Actions.list()}> List View </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => Actions.form()}> Add Vendor </Button>
        </CardSection>
      </Card>
    );
  }
}

export default ViewMap;
