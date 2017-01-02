import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';
import Vendors from './Vendors'
import MapView from './MapView'

class NavGuy extends Component {
  render() {
   const routes = [
     {title: 'Vendors', index: 0},
     {title: 'Map', index: 1},
   ];
   return (
     <Navigator
       initialRoute={routes[0]}
       initialRouteStack={routes}
       renderScene={(route, navigator) =>
         <TouchableHighlight onPress={() => {
           if (route.index === 0) {
             navigator.push(routes[1]);
           } else {
             navigator.pop();
           }
         }}>
         <Text>Hello {route.title}!</Text>
         </TouchableHighlight>
       }
       style={{padding: 100}}
       navigationBar={
        <Navigator.NavigationBar
          routeMapper={{
           LeftButton: (route, navigator, index, navState) =>
            { return (<Text>Map View</Text>);
              <TouchableHighlight onPress={() => console.log("GA") }  />
            },
           RightButton: (route, navigator, index, navState) =>
             { return (<Text>List View</Text>); },
           Title: (route, navigator, index, navState) =>
             { return (<Text>VNDR</Text>); },
           }}
           style={{backgroundColor: 'gray'}}
        />
        }
     />
   );
  }
 }

export default NavGuy;
