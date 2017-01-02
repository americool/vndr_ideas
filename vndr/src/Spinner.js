import React, { Component } from 'react';
import { Spinner } from 'native-base';

export default class LoadingSpinner extends Component {
    render() {
        return (
          <Spinner style={style} />
        );
    }
}

const style = {
  paddingLeft: 300,
}
