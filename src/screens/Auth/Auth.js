import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';

import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import BackgroundImage from "../../assets/abc.jpg"
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from  '../../components/UI/ButtonWithBackground/ButtonWithBackground'
class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render () {
        return (
            <ImageBackground source={BackgroundImage} style={styles.BackgroundImage}>
            <View style={styles.container}>
                <MainText>
                <HeadingText>Please Login</HeadingText>
                </MainText>
                <ButtonWithBackground color="red" onPress={() => alert("Welcome")}>Switch to Login</ButtonWithBackground>
                <View style={styles.inputContainer}>
                <DefaultInput placeholder="Your E-Mail Address"style={styles.input}/>
                <DefaultInput placeholder="Name"style={styles.input}/>
                <DefaultInput placeholder="Phone-Number"style={styles.input}/>
                <DefaultInput placeholder="Password"style={styles.input}/>
                <DefaultInput placeholder="Confirm Password"style={styles.input}/>
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

  }
});
export default AuthScreen;
