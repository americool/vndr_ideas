import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import Rebase from 're-base';
import config from './lib/config';
import { Button, Card, CardSection, Input } from './common';

const base = Rebase.createClass(config);

class Form extends Component {

  state = { name: '', discription: '', distance: '', loading: false, error: false };

  // submitNewVendor(){
  //   const { name, discription, distance } = this.state;
  //   var immediatelyAvailableReference = base.push('bears', {
  //     data: { name: name, discription: discription, distance: distance },
  //     then(err){
  //       if(!err){
  //         Router.transitionTo('dashboard');
  //       }
  //       console.log(this.state)
  //     }
  //   });
  //   //available immediately, you don't have to wait for the callback to be called
  //   var generatedKey = immediatelyAvailableReference.key;
  // }

  //Not sure if I should make vars const or let - not getting console log
  submitNewVendor() {
    const { name, discription, distance } = this.state;

    base.push('vendors', {
      data: { vndrName: name, description: discription, distance: distance } 
    })
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
            value={this.state.discription}
            onChangeText={text => this.setState({ discription: text })}
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
