import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Rebase from 're-base';
import config from './lib/config';
import { Button, Card, CardSection, Input } from './common';

const base = Rebase.createClass(config);

class Form extends Component {

  state = { name: '', description: '', distance: '', loading: false, error: false };

  submitNewVendor() {
    const { name, description, distance } = this.state;

    base.push('vendors', {
      data: { vndrName: name, description: description, distance: distance }
    }).then(
      Actions.list()
    );
  }

  render() {
    return (
      <Card>

        <CardSection>
          <Input
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
            label="Distance:"
            value={this.state.distance}
            onChangeText={text => this.setState({ distance: text })}
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
