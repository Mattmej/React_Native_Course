import React, {Component} from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';


class UserInput extends Component {


  state = {
    placeName: ''
  };


  placeNameChangedHandler = (val) => {

    // Change state so that state.placeName = [value we enter]
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {

    // If the placeName is empty, do nothing.
    if (this.state.placeName.trim() ==="") {
      return;
    }

    // Performs a function passed via props. Parameter will be state.placeName.
    this.props.onPlaceAdded(this.state.placeName);
  };


  // What is rendered when we place a UserInput object inside App.js render function.
  render() {
    return (
      
      <View style={styles.inputContainer}>

        <TextInput 
          style={styles.placeInput}
          placeholder="An awesome place"
          value={this.state.placeName} 
          onChangeText={this.placeNameChangedHandler}
        />

        <Button 
          title="Add" 
          style={styles.placeButton} 
          // onPress={this.placeAddedHandler} 
          onPress={this.placeSubmitHandler}
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
