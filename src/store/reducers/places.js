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
             uri: "https://images.pexels.com/photos/1707823/pexels-photo-1707823.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
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
