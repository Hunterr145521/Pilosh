//
// import React, {Component} from 'react';
// import {Platform, StyleSheet, View} from 'react-native';
// import { connect } from 'react-redux';
// import PlaceInput from './src/components/PlaceInput/PlaceInput';
// //import placeImage from './src/assets/break-car-couple-196666.jpg';
// import PlaceList from './src/components/PlaceList/PlaceList';
// import PlaceDetail from './src/components/placeDetail/placeDetail';
// import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';
// type Props = {};
// class App extends Component {
//   placeAddedHandler = placeName => {
//     this.props.onAddPlace(placeName);
//   }
//   placeSelectHandler = key => {
//     this.props.onSelectPlace(key);
//   }
//
// placeDeletedHandler = () => {
//     this.props.onDeletePlace();
// }
// modalClosedHandler = () => {
//   this.props.onDeselectPlace();
// }
//   render() {
//
//     return (
//       <View style={styles.container}>
//       <PlaceDetail
//        selectedPlaces={this.props.selectedPlaces}
//        onItemDeleted={this.placeDeletedHandler}
//        onModalClosed={this.modalClosedHandler}
//       />
//           <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
//         <PlaceList
//         places={this.props.places}
//         onItemSelected={this.placeSelectHandler}/>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#222',
//     padding: 26
//   }
//
// });
// const mapStateToProps = state => {
//   return {
//       places: state.places.places,
//       selectedPlaces: state.places.selectedPlaces
//   };
// };
//
// const mapDispatchToProps = dispatch => {
//   return{
//     onAddPlace: (name) => dispatch(addPlace(name)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (key) => dispatch(selectPlace(key)),
//     onDeselectPlace: () => dispatch(deselectPlace())
//   };
// };
//
// export default connect(mapStateToProps, mapDispatchToProps)(App);
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////;
import {Navigation} from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';
//Register Screen
Navigation.registerComponent("PiLoSh.AuthScreen",() => AuthScreen);

//Starting the app!!!1
Navigation.StartingSingleScreenApp({
  screen: {
    screen: "PiLoSh.AuthScreen",
    title: "Login"
  }
});
