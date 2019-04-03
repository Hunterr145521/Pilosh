import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';

import { addPlace } from '../../store/actions/index';
import { connect } from 'react-redux';
import PlaceInput from '../../components/PlaceInput/PlaceInput';
import MainText from '../../components/UI/MainText/MainText';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from "../../components/PickImage/PickImage";

import PickLocation from '../../components/PickLocation/PickLocation';

class SharePlaceScreen extends Component {
  static navigatorStyle =  {
    navBarButtonColor: "#03a9fa"
  }
  state = {
    placeName: ""
  };

  placeNameChangedHandeler = val => {
    this.setState({
      placeName: val
    })
  }
    constructor(props) {
      super(props);
      this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    }
    onNavigatorEvent = event => {
      if(event.type === "NavBarButtonPress") {
        if(event.id === "SideDrawerToggle"){
          this.props.navigator.toggleDrawer({
            side: "left"
          });
        }
      }
    };
  placeAaddedHandler = placeName => {
    if(this.state.placeName.trim() !== ""){
    this.props.onAddPlace(this.state.placeName);
  }
}
    render () {
        return (
          <ScrollView>
            <View style={styles.container}>
            <MainText>
              <HeadingText>Lets Share a place!</HeadingText>
            </MainText>
           <PickImage />
          <PickLocation />
              <PlaceInput placeName={this.state.placeName} onChangeText={this.placeNameChangedHandeler} />
              <View style={styles.button}>
                <Button title ="share the place!" onPress={this.placeAaddedHandler}/>
              </View>

            </View>
          </ScrollView>
        );
    }
}
const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName))
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth:1,
    borderColor:"#eee",
    width:"80%",
    height:150
  },
  button:{
    margin:7
  },
  image:{
    width:"100%",
    height:"100%"
  }
});
export default connect(null, mapDispatchToProps)(SharePlaceScreen);
//wow
