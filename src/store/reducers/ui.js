import {UI_START_LOADING, UI_STOP_LODING} from '../actions/actionTypes';

const initialState = {
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_START_LOADING:
      return{
        ...state,
        isLoading: true
      };
    case UI_STOP_LODING:
    return{
      ...state,
      isLoading: false
    };
    default:
      return state;
  }
};

export default reducer;
