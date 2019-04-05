// write here !!!
import { ADD_PLACE, DELETE_PLACE} from '../actions/actionTypes';
const initialState = {
  places: []
};
const reducer  = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: '' + Math.random(),
           name: action.placeName,
           image: {
             uri: action.image.uri
           }
          })
      };
      case DELETE_PLACE:
        return {
          ...state,
          places: state.places.filter(place => {
            return place.key !== action.placeKey;
          })
        };
        //start
        // case SELECT_PLACE:
        //   return {
        //     ...state,
        //     selectedPlaces: state.places.find(place => {
        //       return place.key === action.placeKey;
        //     })
        //   };
        // case DESELECT_PLACE:
        //   return {
        //     ...state,
        //     selectedPlaces: null
        //   };
         default:
            return state;
  }
};
//, SELECT_PLACE, DESELECT_PLACE

export default reducer;
