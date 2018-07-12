import axios from "axios";

import { PROFILE_LOADING, GET_TRANSACTIONS } from "./types";

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

/*
req: POST
des: get_TRANSACTIONS
*/
const producerParams = {};
export const getTransactions = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post("", producerParams)
    .then(res =>
      dispatch({
        type: GET_TRANSACTIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_TRANSACTIONS,
        payload: {}
      })
    );
};
