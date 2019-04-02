import React, { Component } from "react";
import {View, Image, Button, StyleSheet, Text} from "react-native";

class PickLocation extends Component {
  render(){
    return(
      <View style={styles.container}>
      <View style={styles.placeholder}>
        <Text>Map</Text>
      </View>
        <View style={styles.button}>
          <Button title ="Locate Me!" onPress={() => alert("Where is this palce!")} />
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  alignItems:"center"  }
  ,
  placeholder: {
    borderWidth:1,
    borderColor:"#eee",
    width:"80%",
    height:150
  },
  button:{
    margin:7
  }
});

export default PickLocation;