import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from "react-redux";
import { authLogout } from "../../store/actions/index";

class SideDrawer extends Component {
  render(){
    return(
      <View
       style={[styles.container,
        {width: Dimensions.get("window").width * 0.7}
      ]}
      >
      <TouchableOpacity onPress={this.props.onLogout}>
        <View style={styles.drawerItem}>
          <Icon name={Platform.OS === "android" ? "perm-identity" : "ios-log-out"} size={30} color="#aaa" style={styles.drawerItemIcon}/>
          <Text>Profile</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.drawerItem}>
          <Icon name={Platform.OS === "android" ? "help": "help"} size={30} color="#aaa" style={styles.drawerItemIcon}/>
          <Text>Help</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.drawerItem}>
          <Icon name={Platform.OS === "android" ? "input" : "input"} size={30} color="#aaa" style={styles.drawerItemIcon}/>
          <Text>Sign Out</Text>
          </View>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#90caf9",
    color: "#000",
    flex: 1
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor:"#eee",
    marginBottom: "1%"
  },
  drawerItemIcon:{
    marginRight:"10%"
  }
});

const mapDispatchToProps = dispatch => {
  return{
    onLogout: () => dispatch(authLogout())
  };
}
export default connect(null, mapDispatchToProps)(SideDrawer);
