import {
  USER_LOCATION_REQUEST,
  USER_LOCATION_SUCCESS,
  USER_LOCATION_FAILURE
} from "../types/userTypes";

const initialState = {
  username: "",
  location: "",
  country: "",
  loaded: false
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOCATION_REQUEST:
      return {
        ...state,
        loaded: false
      };
    case USER_LOCATION_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        username: action.payload.username,
        location: action.payload.location,
        country: action.payload.country,
        loaded: true
      };
    case USER_LOCATION_FAILURE:
      return {
        ...state,
        loaded: true
      };
    default:
      return state;
  }
}
