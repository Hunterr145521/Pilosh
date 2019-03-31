import React from 'react';
import {Text, StyleSheet} from 'react-native';
const headingText = props => (
  <Text {...props} style={[styles.textHeading, props.stye]}>{props.children}</Text>

);

const styles = StyleSheet.create({
  textHeading:{
    fontSize: 25,
    fontWeight: "bold",
    color: "#3ad"
  },
})
export default headingText;
