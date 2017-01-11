import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import VndrList from './VndrList';
import ViewMap from './ViewMap';
import Form from './Form';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="list">
        <Scene key="VndrList" component={VndrList} title="List View" />
      </Scene>

      <Scene key="map">
        <Scene key="ViewMap" component={ViewMap} title="Map View" />
      </Scene>

      <Scene key="form">
        <Scene key="Form" component={Form} title="Add Vendor" />
      </Scene>

    </Router>
  );
};

export default RouterComponent;
