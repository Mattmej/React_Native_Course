import React, { Component } from 'react';
// import ListItem from './src/components/ListItem/ListItem';
import ListItem from '../ListItem/ListItem';
import { View, StyleSheet } from 'react-native';

// const list = (props) => (

// );

const list = (props) => {
  
  // Displays whatever place we input into the text field
  // after pressing "add" button.
  const placesOutput = props.places.map((place, i) => (
    // <Text key={i}>{place}</Text>
    <ListItem key={i} placeName={place} />
  ));

  return (
    <View style={styles.listContainer}>{placesOutput}</View>
  );
};

const styles = StyleSheet.create({



  listContainer: {
    width: "100%"
  },
});

export default list;