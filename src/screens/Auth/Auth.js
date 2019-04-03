// import React, { Component } from 'react';
// import { View, Text, Button, TextInput, StyleSheet, ImageBackground, Dimensions } from 'react-native';
//
// import startMainTabs from '../MainTabs/startMainTabs';
//
// import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
// import HeadingText from "../../components/UI/HeadingText/HeadingText";
// import BackgroundImage from "../../assets/abc.jpg"
// import MainText from "../../components/UI/MainText/MainText";
// import ButtonWithBackground from  '../../components/UI/ButtonWithBackground/ButtonWithBackground'
// class AuthScreen extends Component {
//     state = {
//       viewMode : Dimensions.get("window").height > 500 ? "potrait" : "landscape"
//     };
//     constructor(props){
//       super(props);
//       Dimensions.addEventListener("change", this.updateStyles);
//     }
//
//     componentWillUnmount() {
//       Dimensions.removeEventListener("change",this.updateStyles);
//     }
//     updateStyles = (dims) => {
//       this.setState({
//         viewMode : Dimensions.get("window").height > 500 ? "potrait" : "landscape"
//       })
//     }
//     loginHandler = () => {
//         startMainTabs();
//     }
//
//     render () {
//       let headingText = null;
//       if(this.state.viewMode === "potrait"){
//         headingText = (
//           <MainText>
//           <HeadingText>Please Login</HeadingText>
//           </MainText>
//         );
//       }
//         return (
//             <ImageBackground source={BackgroundImage} style={styles.BackgroundImage}>
//             <View style={styles.container}>
//                 {headingText}
//                 <ButtonWithBackground color="red" onPress={() => alert("Welcome")}>Switch to Login</ButtonWithBackground>
//                 <View style={styles.inputContainer}>
//                 <DefaultInput placeholder="Your E-Mail Address"style={styles.input}/>
//                 <View style={this.state.viewMode === "potrait"
//                 ? styles.potraitPasswordContainer
//                 : styles.landScapePasswordContainer}>
//                 <View style={this.state.viewMode === "potrait"
//                 ? styles.potraitPasswordWrapper
//                 : styles.landScapePasswordWrapper}>
//                 <DefaultInput placeholder="Name"style={styles.input}/>
//                 </View>
//                 <View style={this.state.viewMode === "potrait"
//                 ? styles.potraitPasswordWrapper
//                 : styles.landScapePasswordWrapper}>
//                 <DefaultInput placeholder="Phone-Number"style={styles.input}/>
//                 </View>
//                 </View>
//                 <View style={this.state.viewMode === "potrait"
//                 ? styles.potraitPasswordContainer
//                 : styles.landScapePasswordContainer}>
//                 <View style={this.state.viewMode === "potrait"
//                 ? styles.potraitPasswordWrapper
//                 : styles.landScapePasswordWrapper}>
//                 <DefaultInput placeholder="Password"style={styles.input}/>
//                 </View>
//                 <View style={this.state.viewMode === "potrait"
//                 ? styles.potraitPasswordWrapper
//                 : styles.landScapePasswordWrapper}>
//                 <DefaultInput placeholder="Confirm Password"style={styles.input}/>
//                 </View>
//                 </View>
//                 </View>
//                 <ButtonWithBackground color="#623" onPress={this.loginHandler}>
//                 Submit
//                 </ButtonWithBackground>
//             </View>
//             </ImageBackground>
//
//         );
//     }
// }
// //aaa
//
// const styles = StyleSheet.create({
//   container:{
//     //borderColor:"red",
//     //borderWidth:1
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   BackgroundImage:{
//     width:"100%",
//     flex : 1
//   },
//   inputContainer:{
//     width: "80%"
//   },
//
//   input: {
//     backgroundColor: "#eee"
//
//   },
//   landScapePasswordContainer: {
//     flexDirection:  "row",
//     justifyContent: "space-between"
//
//   },
//   potraitPasswordContainer: {
//     flexDirection:  "column",
//     justifyContent: "flex-start"
//
//   },
//   landScapePasswordWrapper: {
//     width: "45%"
//   },
//   potraitPasswordWrapper: {
//     width: "100%"
//   }
// });
// export default AuthScreen;
//
//
import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";
import BackgroundImage from "../../assets/abc.jpg";
import validate from "../../Utility/validation";
import { tryAuth } from "../../store/actions/index";

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape",
    authMode: "login",
    controls: {
      email: {
        value: "",
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      name: {
        value: "",
        valid: false,
        validationRules: {
          isName: true
        },
        touched: false
      },
      password: {
        value: "",
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: "",
        valid: false,
        validationRules: {
          equalTo: "password"
        },
        touched: false
      }
    }
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  switchAuthModeHandler = () => {
    this.setState(prevState => {
      return {
        authMode: prevState.authMode === "login" ? "signup" : "login"
      };
    });
  };

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  loginHandler = () => {
    const authData = {
      email: this.state.controls.email.value,
      password: this.state.controls.password.value
    };
    this.props.onLogin(authData);
    startMainTabs();
  };

  updateInputState = (key, value) => {
    let connectedValue = {};
    if (this.state.controls[key].validationRules.equalTo) {
      const equalControl = this.state.controls[key].validationRules.equalTo;
      const equalValue = this.state.controls[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (key === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: value
      };
    }
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          confirmPassword: {
            ...prevState.controls.confirmPassword,
            valid:
              key === "password"
                ? validate(
                    prevState.controls.confirmPassword.value,
                    prevState.controls.confirmPassword.validationRules,
                    connectedValue
                  )
                : prevState.controls.confirmPassword.valid
          },
          [key]: {
            ...prevState.controls[key],
            value: value,
            valid: validate(
              value,
              prevState.controls[key].validationRules,
              connectedValue
            ),
            touched: true
          }
        }
      };
    });
  };

  render() {
    let headingText = null;
    let confirmPasswordControl = null;

    if (this.state.viewMode === "portrait") {
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }
    if (this.state.authMode === "signup") {
      confirmPasswordControl = (
        <View
          style={
            this.state.viewMode === "portrait"
              ? styles.portraitPasswordWrapper
              : styles.landscapePasswordWrapper
          }
        >
          <DefaultInput
            placeholder="Confirm Password"
            style={styles.input}
            value={this.state.controls.confirmPassword.value}
            onChangeText={val => this.updateInputState("confirmPassword", val)}
            valid={this.state.controls.confirmPassword.valid}
            touched={this.state.controls.confirmPassword.touched}
          />
        </View>
      );
    }
    return (
      <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <ButtonWithBackground
            color="#29aaf4"
            onPress={this.switchAuthModeHandler}
          >
            Switch to {this.state.authMode === "login" ? "Sign Up" : "Login"}
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your E-Mail Address"
              style={styles.input}
              value={this.state.controls.email.value}
              onChangeText={val => this.updateInputState("email", val)}
              valid={this.state.controls.email.valid}
              touched={this.state.controls.email.touched}
            />
            <DefaultInput
              placeholder="User_Name"
              style={styles.input}
              value={this.state.controls.name.value}
              onChangeText={val => this.updateInputState("name", val)}
              valid={this.state.controls.name.valid}
              touched={this.state.controls.name.touched}
            />

            <View
              style={
                this.state.viewMode === "portrait" ||
                this.state.authMode === "login"
                  ? styles.portraitPasswordContainer
                  : styles.landscapePasswordContainer
              }
            >
              <View
                style={
                  this.state.viewMode === "portrait" ||
                  this.state.authMode === "login"
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput
                  placeholder="Password"
                  style={styles.input}
                  value={this.state.controls.password.value}
                  onChangeText={val => this.updateInputState("password", val)}
                  valid={this.state.controls.password.valid}
                  touched={this.state.controls.password.touched}
                />
              </View>
              {confirmPasswordControl}
            </View>
          </View>
          <ButtonWithBackground
            color="#29aaf4"
            onPress={this.loginHandler}
            disabled={
              !this.state.controls.confirmPassword.valid ||
              !this.state.controls.email.valid ||
              !this.state.controls.password.valid
            }
          >
            Submit
          </ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  landscapePasswordWrapper: {
    width: "45%"
  },
  portraitPasswordWrapper: {
    width: "100%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onLogin: authData => dispatch(tryAuth(authData))
  };
};

export default connect(null, mapDispatchToProps)(AuthScreen);
