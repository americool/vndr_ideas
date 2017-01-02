import React from 'react';
import { Actions } from 'react-native-router-flux';
import Vendors from './Vendors';
import { Button, Card, CardSection } from './common';


const VndrList = () => {
  return (
    <Card>
      <CardSection>
        <Vendors />
      </CardSection>
      <CardSection>
        <Button onPress={() => Actions.map()}> Map View </Button>
      </CardSection>
      <CardSection>
        <Button onPress={() => Actions.form()}> Add Vendor </Button>
      </CardSection>
    </Card>
  );
};

export default VndrList;
