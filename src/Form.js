import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Rebase from 're-base';
import config from './lib/config';
import { Button, Card, CardSection, Input } from './common';
import { getDistance } from './helpers/calculateDistance';

const base = Rebase.createClass(config);

class Form extends Component {

  state = {
    name: '',
    description: '',
    distance: '',
    vendLatitude: '',
    vendLongitude: '',
    userLatitude: '',
    userLongitude: '',
    loading: false,
    error: false
  };

  componentDidMount() {
    console.log('Mounted');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          userLatitude: position.coords.latitude,
          userLongitude: position.coords.longitude
        });
      }
    );
  }

  submitNewVendor() {
    const {
      name,
      description,
      userLatitude,
      userLongitude,
    } = this.state;

    let {
      vendLatitude,
      vendLongitude
    } = this.state;

    vendLatitude = parseFloat(vendLatitude.trim());
    vendLongitude = parseFloat(vendLongitude.trim());
    const calcDistance =
    getDistance(userLatitude, userLongitude, vendLatitude, vendLongitude).toFixed(2);

    base.push('vendors', {
      data: {
        vndrName: name.trim(),
        description: description.trim(),
        distance: calcDistance }
    }).then(
      Actions.list()
    );
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
            className="name-input"
            placeholder=""
            label="Name:"
            value={this.state.name}
            onChangeText={text => this.setState({ name: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder=""
            label="Description:"
            value={this.state.description}
            onChangeText={text => this.setState({ description: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder=""
            label="Latitude:"
            value={this.state.vendLatitude}
            onChangeText={text => this.setState({ vendLatitude: text })}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder=""
            label="Longitude:"
            value={this.state.vendLongitude}
            onChangeText={text => this.setState({ vendLongitude: text })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.submitNewVendor.bind(this)}> SUBMIT </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => Actions.list()}> List View </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => Actions.map()}> Map View </Button>
        </CardSection>

      </Card>

    );
  }
}

export default Form;
