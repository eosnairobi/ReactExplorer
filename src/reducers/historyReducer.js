import { PROFILE_LOADING, GET_TRANSACTIONS } from "../actions/types";

const initialState = {
  get_transactions: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_TRANSACTIONS:
      return {
        ...state,
        get_producers: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
