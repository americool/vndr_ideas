import React from 'react';
import { View } from 'react-native';
import Vendors from './Vendors';
import { Button, Card, CardSection } from './common';
import { Actions } from 'react-native-router-flux';

const VndrList = () => {
  return (
    <Card>
      <CardSection>
        <Vendors />
      </CardSection>
      <CardSection>
        <Button onPress={() => Actions.MapView()}> Map View </Button>
      </CardSection>
    </Card>
  );
};

export default VndrList;
