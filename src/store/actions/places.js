import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = (placeName, image) => {
  return {
    type: ADD_PLACE,
    placeName: placeName,
    image: image
  };
};

export const deletePlace = (key) => {
  return {
    type: DELETE_PLACE,
    placeKey: key
  };
};
//
// export const selectPlace = (key) => {
//   return {
//     type: SELECT_PLACE,
//     placeKey: key
//   };
// };
//
// export const deselectPlace = () => {
//   return {
//     type: DESELECT_PLACE
//   };
// };
 //import section == , SELECT_PLACE, DESELECT_PLACE
