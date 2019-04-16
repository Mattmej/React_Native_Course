import React, {Component} from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';


class UserInput extends Component {


  state = {
    placeName: ''
  };


  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    });
  };


  // // Trigger handler upon button press.
  // placeAddedHandler = (placeName) => {

  //   // If the user enters an empty string
  //   if (this.state.placeName.trim() === "") {
  //     return;
  //   }

  //   // // Here, we use the function syntax
  //   // // where we take the previous state
  //   // // and then return the object which should be merged w/ the state.
  //   // this.setState(prevState => {
  //   //   return {

  //   //     // Concat will add a new element and return a new array
  //   //     // to update immutably.
  //   //     // We will add to places whatever the user entered
  //   //     places: prevState.places.concat(prevState.placeName)
  //   //   }
  //   // })

  //   this.props.onPlaceAdded(this.state.placeName);
  // }

  // this.props.onPlaceAdded(this.state.placeName);




  render() {
    return (
      
      <View style={styles.inputContainer}>

        <TextInput 
          style={styles.placeInput}
          placeholder="An awesome place"
          value={this.state.placeName} 
          onChangeText={this.placeNameChangedHandler}
        />

        <Button title="Add" 
          style={styles.placeButton} 
          // onPress={this.placeAddedHandler} 
          onPress={this.placeAddedHandler}
        />


      </View>


    )
  }

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

export default UserInput;
