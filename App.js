/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
// import { start } from 'repl';

import ListItem from './src/components/ListItem/ListItem';
import UserInput from './src/components/UserInput/UserInput';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {

  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    });
  };

  // Trigger handler upon button press.
  placeSubmitHandler = () => {

    // If the user enters an empty string
    if (this.state.placeName.trim() === "") {
      return;
    }

    // Here, we use the function syntax
    // where we take the previous state
    // and then return the object which should be merged w/ the state.
    this.setState(prevState => {
      return {

        // Concat will add a new element and return a new array
        // to update immutably.
        // We will add to places whatever the user entered
        // User entered "prevState.placeName"
        places: prevState.places.concat(prevState.placeName)
      }
    })
  }

  render() {

    // Displays whatever place we input into the text field
    // after pressing "add" button.
    const placesOutput = this.state.places.map((place, i) => (
      // <Text key={i}>{place}</Text>
      <ListItem key={i} placeName={place} />
    ))
    return (
      <View style={styles.container}>
 
      <UserInput 
        placeName={this.props.placeName}
        placeNameChangedHandler={this.placeNameChangedHandler(placeName)}
        placeSubmitHandler={this.placeSubmitHandler} 
      />



        {/* Here, we render our list in this view.
            It doesn't have any special styling attached.
            Will only take up an amount of width 
            that the child element needs. */}
        <View style={styles.listContainer}>{placesOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
    justifyContent: "flex-start",
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listContainer: {
    width: "100%"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
