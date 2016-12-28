import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Rebase from 're-base';
import config from './lib/config'

const base = Rebase.createClass(config);

class Vendors extends Component {
  constructor(props) {
    super(props)
    this.state = {data: null}
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    base.fetch('vendors', {
     context: this, // Vendors
     asArray: true,
     then(data){
       this.setState({
         data: data
       });
     }
   });
  }
  render() {
    console.log(this.state.data)
    return (
      <View><Text>Foo</Text></View>
    )
  }
}
export default Vendors;
