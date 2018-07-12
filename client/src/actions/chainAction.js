import axios from "axios";

import { GET_INFO, PROFILE_LOADING, GET_PRODUCERS } from "./types";
const url = "http://mainnet.eoscanada.com/v1";
// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// @get_info
// Returns an object containing various
// details about the blockchain.
export const getInfo = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get(`${url}/chain/get_info`)
    .then(res =>
      dispatch({
        type: GET_INFO,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_INFO,
        payload: {}
      });
    });
};

/*
req: POST
des: get_producers
*/

export const getProducers = producerParams => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post(`${url}/chain/get_producers`, producerParams)
    .then(res =>
      dispatch({
        type: GET_PRODUCERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PRODUCERS,
        payload: {}
      })
    );
};
