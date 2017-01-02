import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';


class Form extends Component {
  render() {
    return (
      <Card>

        <CardSection>
          <Input
            placeholder=""
            label="Name:"
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder=""
            label="Description:"
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder=""
            label="Distance:"
          />
        </CardSection>

        <CardSection>
          <Button onPress={() => Actions.list()}> List View </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => Actions.map()}> Map View </Button>
        </CardSection>

      </Card>

  )};
}

export default Form;
