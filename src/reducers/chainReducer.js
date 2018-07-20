import {
  GET_INFO,
  PROFILE_LOADING,
  GET_PRODUCERS,
  GET_BlOCK_INFO,
  GET_BLOCK
} from "../actions/types";

const initialState = {
  get_info: null,
  get_block: null,
  get_block_info: null,
  get_producers: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_INFO:
      return {
        ...state,
        get_info: action.payload,
        loading: false
      };
    case GET_PRODUCERS:
      return {
        ...state,
        get_producers: action.payload,
        loading: false
      };
    case GET_BLOCK:
      return {
        ...state,
        get_block: action.payload,
        loading: false
      };
    case GET_BlOCK_INFO:
      return {
        ...state,
        get_block_info: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
