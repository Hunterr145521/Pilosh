import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
const placeDetail  = props => {

    let modalContent = null;
    if(props.selectedPlaces) {
      modalContent = (
        <View>
        <Image source={props.selectedPlaces.image} style={styles.placeImage}/>
        <Text style={styles.placeName}>{props.selectedPlaces.name}</Text>
        </View>
      );
    };

  return(
    <Modal
     onRequestClose={props.onModalClosed}
     visible={props.selectedPlaces !== null}
     anmationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
            <TouchableOpacity onPress={props.onItemDeleted}>
            <View style={styles.deleteButton}>
              <Icon size={40} name="trash" color="red"/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onModalClosed}>
            <View style={styles.closeButton}>
              <Icon size={40} name="close" color="green"/>
            </View>
            </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    margin:22
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
  }

})

export default placeDetail;
