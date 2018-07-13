import { PROFILE_LOADING, GET_COINMARKETCAP } from "../actions/types";

const initialState = {
  get_currency: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_COINMARKETCAP:
      return {
        ...state,
        get_currency: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
