import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text } from 'react-native';
import { Button, Card, CardSection } from './common';

const MapView = () => {
  return (
    <Card>
      <CardSection>
        <Text> MAPS! </Text>
      </CardSection>
      <CardSection>
        <Button onPress={() => Actions.list()}> List View </Button>
      </CardSection>
      <CardSection>
        <Button onPress={() => Actions.form()}> Add Vendor </Button>
      </CardSection>
    </Card>
  );
};

export default MapView;
