import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Rebase from 're-base';
import config from './lib/config';
import List from './List';

const base = Rebase.createClass(config);

class Vendors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentWillMount() {
    this.fetchData()
  }

  fetchData() {
    base.fetch('vendors', {
     context: this, // Vendors
     asArray: true
   }).then(data => {
       this.setState({
         data: data
       });
     }
   );
  }

  renderData() {
    return this.state.data.map(vendors =>
      <List key={vendors.key} vendor={vendor} />);
  }

  render() {
    let test = this.state.data
    console.log(this.state.data)
    console.log(test)
    return (
      <View><Text>GA</Text></View>
    )
  }
}
export default Vendors;
