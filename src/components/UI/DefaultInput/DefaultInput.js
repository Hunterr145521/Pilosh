import React from "react";
import { TextInput, StyleSheet} from "react-native";
const defaultInput  = props => (
  <TextInput
   {...props}
   style={[styles.input, props.style, !props.valid && props.touched ? styles.invalid : styles.isvalid]}
    />

);
const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#bdb",
    padding: 5,
    marginTop: 8,
    marginBottom: 8
  },
  invalid: {
    backgroundColor: "#FFCCBC",
    borderColor: "#FF8a65"
  },
  isvalid: {
    backgroundColor: "#b9f6ca",
    borderColor: "#69f0ae"
  }
});
export default defaultInput;
