import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import VndrList from './VndrList';
import MapView from './MapView';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="VndrList" component={VndrList} title="List View" />
      <Scene key="MapView" component={MapView} title="Map View" />
    </Router>
  );
};

export default RouterComponent;
