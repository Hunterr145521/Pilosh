import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import BackgroundImage from "../../assets/abc.jpg"
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from  '../../components/UI/ButtonWithBackground/ButtonWithBackground'
class AuthScreen extends Component {
    state = {
      viewMode : Dimensions.get("window").height > 500 ? "potrait" : "landscape"
    };
    constructor(props){
      super(props);
      Dimensions.addEventListener("change", this.updateStyles);
    }

    componentWillUnmount() {
      Dimensions.removeEventListener("change",this.updateStyles);
    }
    updateStyles = (dims) => {
      this.setState({
        viewMode : Dimensions.get("window").height > 500 ? "potrait" : "landscape"
      })
    }
    loginHandler = () => {
        startMainTabs();
    }

    render () {
      let headingText = null;
      if(this.state.viewMode === "potrait"){
        headingText = (
          <MainText>
          <HeadingText>Please Login</HeadingText>
          </MainText>
        );
      }
        return (
            <ImageBackground source={BackgroundImage} style={styles.BackgroundImage}>
            <View style={styles.container}>
                {headingText}
                <ButtonWithBackground color="red" onPress={() => alert("Welcome")}>Switch to Login</ButtonWithBackground>
                <View style={styles.inputContainer}>
                <DefaultInput placeholder="Your E-Mail Address"style={styles.input}/>
                <View style={this.state.viewMode === "potrait"
                ? styles.potraitPasswordContainer
                : styles.landScapePasswordContainer}>
                <View style={this.state.viewMode === "potrait"
                ? styles.potraitPasswordWrapper
                : styles.landScapePasswordWrapper}>
                <DefaultInput placeholder="Name"style={styles.input}/>
                </View>
                <View style={this.state.viewMode === "potrait"
                ? styles.potraitPasswordWrapper
                : styles.landScapePasswordWrapper}>
                <DefaultInput placeholder="Phone-Number"style={styles.input}/>
                </View>
                </View>
                <View style={this.state.viewMode === "potrait"
                ? styles.potraitPasswordContainer
                : styles.landScapePasswordContainer}>
                <View style={this.state.viewMode === "potrait"
                ? styles.potraitPasswordWrapper
                : styles.landScapePasswordWrapper}>
                <DefaultInput placeholder="Password"style={styles.input}/>
                </View>
                <View style={this.state.viewMode === "potrait"
                ? styles.potraitPasswordWrapper
                : styles.landScapePasswordWrapper}>
                <DefaultInput placeholder="Confirm Password"style={styles.input}/>
                </View>
                </View>
                </View>
                <ButtonWithBackground color="#623" onPress={this.loginHandler}>
                Submit
                </ButtonWithBackground>
            </View>
            </ImageBackground>

        );
    }
}
//aaa

const styles = StyleSheet.create({
  container:{
    //borderColor:"red",
    //borderWidth:1
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  BackgroundImage:{
    width:"100%",
    flex : 1
  },
  inputContainer:{
    width: "80%"
  },

  input: {
    backgroundColor: "#eee"

  },
  landScapePasswordContainer: {
    flexDirection:  "row",
    justifyContent: "space-between"

  },
  potraitPasswordContainer: {
    flexDirection:  "column",
    justifyContent: "flex-start"

  },
  landScapePasswordWrapper: {
    width: "45%"
  },
  potraitPasswordWrapper: {
    width: "100%"
  }
});
export default AuthScreen;
