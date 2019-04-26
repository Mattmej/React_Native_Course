import React, { Component } from 'react';
// import ListItem from './src/components/ListItem/ListItem';
import ListItem from '../ListItem/ListItem';
import { View, StyleSheet } from 'react-native';

const list = (props) => (

    <View style={styles.listContainer}>{props.placesOutput}</View>
);

const styles = StyleSheet.create({



  listContainer: {
    width: "100%"
  },
})

export default list;