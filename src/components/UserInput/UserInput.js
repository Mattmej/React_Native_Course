import React, {Component} from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';

const userInput = (props) => {
    
  <View style={styles.inputContainer}>

      <TextInput 
      style={styles.placeInput}
      placeholder="An awesome place"
      value={props.placeName} 
      onChangeText={props.placeNameChangedHandler}
      />
      <Button title="Add" 
      style={styles.placeButton} 
      onPress={props.placeSubmitHandler} 
      />


  </View>
};

const styles = StyleSheet.create({
    
  placeInput: {
    width: "70%"
  },

  placeButton: {
    width: "30%"
  },


  inputContainer: {
    // flex: 1,

    // Takes up full available width
    width: "100%",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
});

export default userInput;
