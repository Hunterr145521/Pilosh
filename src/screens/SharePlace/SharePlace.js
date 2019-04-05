// import React, { Component } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
//
// import { addPlace } from '../../store/actions/index';
// import { connect } from 'react-redux';
// import PlaceInput from '../../components/PlaceInput/PlaceInput';
// import MainText from '../../components/UI/MainText/MainText';
// import HeadingText from '../../components/UI/HeadingText/HeadingText';
// import PickImage from "../../components/PickImage/PickImage";
//
// import PickLocation from '../../components/PickLocation/PickLocation';
// import validate from '../../Utility/validation';
// class SharePlaceScreen extends Component {
//   static navigatorStyle =  {
//     navBarButtonColor: "#03a9fa"
//   }
//   state = {
//     controls:{
//       value:"",
//       valid: false,
//       touched: false,
//       validationRules: {
//         notEmpty: true
//       }
//     }
//   };
//
//   placeNameChangedHandeler = val => {
//     this.setState(prevState => {
//       return {
//         controls: {
//           ...prevState.controls,
//           placeName: {
//             ...prevState.controls.placeName,
//             value: val,
//             valid: validate(val, prevState.controls.placeName.validationRules),
//             touched: true
//           }
//         }
//       };
//     });
//   };
//     constructor(props) {
//       super(props);
//       this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
//     }
//     onNavigatorEvent = event => {
//       if(event.type === "NavBarButtonPress") {
//         if(event.id === "SideDrawerToggle"){
//           this.props.navigator.toggleDrawer({
//             side: "left"
//           });
//         }
//       }
//     };
//   placeAaddedHandler = placeName => {
//     if(this.state.controls.placeName.value.trim() !== ""){
//     this.props.onAddPlace(this.state.placeName);
//   }
// };
//     render () {
//         return (
//           <ScrollView>
//             <View style={styles.container}>
//             <MainText>
//               <HeadingText>Lets Share a place!</HeadingText>
//             </MainText>
//            <PickImage />
//           <PickLocation />
//               <PlaceInput placeData={this.state.controls.placeName}
//                onChangeText={this.placeNameChangedHandeler} />
//               <View style={styles.button}>
//                 <Button title ="share the place!" onPress={this.placeAaddedHandler} disabled={this.state.controls.placeName.valid}/>
//               </View>
//             </View>
//           </ScrollView>
//         );
//     }
// }
// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (placeName) => dispatch(addPlace(placeName))
//   };
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center"
//   },
//   placeholder: {
//     borderWidth:1,
//     borderColor:"#eee",
//     width:"80%",
//     height:150
//   },
//   button:{
//     margin:7
//   },
//   image:{
//     width:"100%",
//     height:"100%"
//   }
// });
// export default connect(null, mapDispatchToProps)(SharePlaceScreen);
// //wow

import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { connect } from "react-redux";

import { addPlace } from "../../store/actions/index";
import PlaceInput from "../../components/PlaceInput/PlaceInput";
import MainText from "../../components/UI/MainText/MainText";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import PickImage from "../../components/PickImage/PickImage";
import PickLocation from "../../components/PickLocation/PickLocation";
import validate from "../../Utility/validation";

class SharePlaceScreen extends Component {
  static navigatorStyle = {
    navBarButtonColor: "#03a9fa"
  };

  state = {
    controls: {
      placeName: {
        value: "",
        valid: false,
        touched: false,
        validationRules: {
          notEmpty: true
        }
      },
      image: {
        value: null,
        valid: false
      }
    }
  };

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "sideDrawerToggle") {
        this.props.navigator.toggleDrawer({
          side: "left"
        });
      }
    }
  };

  placeNameChangedHandler = val => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          placeName: {
            ...prevState.controls.placeName,
            value: val,
            valid: validate(val, prevState.controls.placeName.validationRules),
            touched: true
          }
        }
      };
    });
  };

  placeAddedHandler = () => {
    if (this.state.controls.placeName.value.trim() !== "") {
      this.props.onAddPlace(this.state.controls.placeName.value,
      this.state.controls.image.value
      );
    }
  };

  imagePickedHandler = image => {
    this.setState(prevState =>{
      return {
        controls: {
          ...prevState.controls,
          image: {
            value: image,
            valid: true
          }
        }
      };
    });
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Share a Place with us!</HeadingText>
          </MainText>
          <PickImage onImagePicked={this.imagePickedHandler}/>
          <PickLocation />
          <PlaceInput
            placeData={this.state.controls.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <View style={styles.button}>
            <Button
              title="Share the Place!"
              onPress={this.placeAddedHandler}
              disabled={!this.state.controls.placeName.valid ||
                        !this.state.controls.image.valid
                        }
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  placeholder: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#eee",
    width: "80%",
    height: 150
  },
  button: {
    margin: 8
  },
  previewImage: {
    width: "100%",
    height: "100%"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName, image) => dispatch(addPlace(placeName, image))
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
