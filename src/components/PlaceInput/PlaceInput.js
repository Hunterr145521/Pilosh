import React , { Component } from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
 class PlaceInput extends Component {
   state = {
     placeName: ''
   }
   placeNaneChangeHandler = value => {
     this.setState({
       placeName: value
       });
   }
   placeSubmitHandler = () => {
     if (this.state.placeName.trim() === ""){
       return;
     }
     this.props.onPlaceAdded(this.state.placeName);
   }
   render(){
     return(
       <View style={styles.inputContainer}>
         <TextInput style={styles.TextInput}
         placeholder="Enter Your Comments"
         value={this.state.placeName}
         onChangeText={this.placeNaneChangeHandler}
         />
         <Button style={styles.onClickButton}
         title="Submit"
         onPress={this.placeSubmitHandler}
         />
       </View>
     );
   }
 }
 const styles = StyleSheet.create({
   TextInput: {
   width: 300,
   backgroundColor: '#424242',
   color:'#fff',
   width: "70%"
 },
 inputContainer: {
   //  flex: 1
     width:'100%',
     flexDirection: "row",
     justifyContent: "space-between"
   },
   onClickButton: {
     width: "30%",
     color:'#eeeeee'
   },
   listContainer: {
     width: "100%"

   }
 });
 export default PlaceInput;
