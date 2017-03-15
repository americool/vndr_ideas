/* global navigator */
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import MapView from 'react-native-maps';
import Rebase from 're-base';
import config from './lib/config';
import { Button, Card, CardSection, Spinner } from './common';
import { sortMapData } from './helpers/pickMapData';

const base = Rebase.createClass(config);

class ViewMap extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [], isLoading: false, userLatitude: 37.78825, userLongitude: -122.4324 };
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState(
          {
            userLatitude: position.coords.latitude,
            userLongitude: position.coords.longitude,
          });
      },
    );
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({ isLoading: true });
    base.fetch('vendors', {
      context: this,
      asArray: true,
    }).then((data) => {
      const usableData = sortMapData(data);
      this.setState({
        data: usableData,
        isLoading: false,
      });
    }).catch(() => {
      this.setState({ isLoading: false });
    });
  }


  renderMap() {
    if (this.state.isLoading) {
      return <Spinner />;
    }
    return (
      <MapView
        style={{ flex: 1, height: 450 }}
        showsUserLocation
        initialRegion={{
          latitude: this.state.userLatitude,
          longitude: this.state.userLongitude,
          latitudeDelta: 0.019,
          longitudeDelta: 0.019,
        }}
      >
        {this.state.data.map(vendor => (
          <MapView.Marker
            key={vendor.key}
            coordinate={{
              latitude: vendor.latitude,
              longitude: vendor.longitude,
            }}
            title={vendor.vndrName}
            description={vendor.description}
          />
        ))}
      </MapView>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          {this.renderMap()}
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
