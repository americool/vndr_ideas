/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import List from './src/List'
import Header from './src/Header'

export default class vndr extends Component {
  render() {
    return (
        <View>
          <Header headerName="List of Vendors" />
          <ScrollView>
            <List vndrName="Huey's House of Dogs" description="Food by Dogs for Dogs" distance='.05' />
            <List vndrName="Abe's Grule Slop" description="Hurried food for desprate people" distance='.07' />
            <List vndrName="Sandwich Town" description="Baloney Sammiches" distance='1.5' />
            <List vndrName="Barf Store" description="Puke, etc." distance='10' />
            <List vndrName="Huey's House of Dogs" description="Food by Dogs for Dogs" distance='.05' />
            <List vndrName="Abe's Grule Slop" description="Hurried food for desprate people" distance='.07' />
            <List vndrName="Sandwich Town" description="Baloney Sammiches" distance='1.5' />
            <List vndrName="Barf Store" description="Puke, etc." distance='10' />
            <List vndrName="Huey's House of Dogs" description="Food by Dogs for Dogs" distance='.05' />
            <List vndrName="Abe's Grule Slop" description="Hurried food for desprate people" distance='.07' />
            <List vndrName="Sandwich Town" description="Baloney Sammiches" distance='1.5' />
            <List vndrName="Barf Store" description="Puke, etc." distance='10' />
            <List vndrName="Huey's House of Dogs" description="Food by Dogs for Dogs" distance='.05' />
            <List vndrName="Abe's Grule Slop" description="Hurried food for desprate people" distance='.07' />
            <List vndrName="Sandwich Town" description="Baloney Sammiches" distance='1.5' />
            <List vndrName="Barf Store" description="Puke, etc." distance='10' />
          </ScrollView>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

AppRegistry.registerComponent('vndr', () => vndr);
