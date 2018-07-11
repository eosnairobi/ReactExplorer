import axios from "axios";

import { GET_INFO, PROFILE_LOADING, GET_PRODUCERS } from "./types";

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
    .get("/chain/get_info")
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
const producerParams = {
  json: "true",
  limit: "300"
};
export const getProducers = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post("/chain/get_producers", producerParams)
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
