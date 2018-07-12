import axios from "axios";

import { PROFILE_LOADING, GET_COINMARKETCAP } from "./types";
const url = "https://api.coinmarketcap.com/v2";
// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// @GET_COINMARKETCAP
// Returns an object containing various
// details about the blockchain.
export const getCoinMarketCap = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`${url}/ticker/1765/`)
    .then(res =>
      dispatch({
        type: GET_COINMARKETCAP,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_COINMARKETCAP,
        payload: {}
      });
    });
};
