import React, { Component } from 'react';
import {  View, Image, Text, Button, StyleSheet, TouchableOpacity, Platform, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { connect } from 'react-redux';
import {deletePlace} from  '../../store/actions/index';
class placeDetail extends Component {
  state =  {
    viewMode: "portrait"
  }

  constructor(props){
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }
componentWillUnmount() {
  Dimensions.removeEventListener("change", this.updateStyles);
}
  updateStyles = dims => {
    this.setState({
  viewMode: dims.window.height > 500 ? "portrait" : "landscape"
})
};
  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlaces.key);
      this.props.navigator.pop();
  }

  render () {
    return(
      <View style={[styles.container,
        this.state.viewMode === "portrait"
      ? styles.potraitContainer
      : styles.landScapeContainer
    ]}>
        <View style={styles.subContainer}>
        <Image source={this.props.selectedPlaces.image} style={styles.placeImage}/>
        </View>
        <View style={styles.container}>
          <View style={styles.subContainer}>
        <Text style={styles.placeName}>{this.props.selectedPlaces.name}</Text>
        </View>
      <View>
            <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon size={40} name={Platform.OS === "android" ? "trash" : "ios-trash"} color="red"/>
            </View>
            </TouchableOpacity>
        </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    margin:22,
    flex: 1
  },
  potraitContainer: {
    flexDirection: "column"
  },
  landScapeContainer: {
    flexDirection: "row"
  },
  placeImage:{
    width:"100%",
    height: 200
  },
  placeName: {
    fontWeight:"bold",
    textAlign:"center",
    fontSize: 28
  },
  deleteButton:{
    alignItems: "center",
    marginTop: 20
  },
  closeButton:{
    alignItems: "center",
    marginTop: 20
  },
  subContainer: {
    flex: 1
  }

});
const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  };
};
export default connect(null,mapDispatchToProps)(placeDetail);
