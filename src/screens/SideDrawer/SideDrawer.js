import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
class SideDrawer extends Component {
  render(){
    return(
      <View style={[styles.container, {width: Dimensions.get("window").width * 0.7}]}>
      <TouchableOpacity>
      <View>
      <Icon name="arrow_back_ios" size={30} color="#aaa"/>
      <Text>Sign Out</Text>
      </View>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 22,
    backgroundColor: "#90caf9",
    color: "#000",
    flex: 1
  }
})
export default SideDrawer;
