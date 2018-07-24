import axios from "axios";

import {
  GET_INFO,
  PROFILE_LOADING,
  GET_PRODUCERS,
  GET_BLOCK,
  GET_BlOCK_INFO
} from "./types";

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

export const getProducers = producerParams => dispatch => {
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

// @get_info
// Returns an object containing various
// details about the blockchain.
export const getBlock = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("http://127.0.0.1:8000/api/v1/blocks/")
    .then(res =>
      dispatch({
        type: GET_BLOCK,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch({
        type: GET_BLOCK,
        payload: {}
      });
    });
};

/*
req: POST
des: get_block
*/

export const getBlockInfo = producerParams => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post("/chain/get_block", producerParams)
    .then(res =>
      dispatch({
        type: GET_BlOCK_INFO,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_BlOCK_INFO,
        payload: {}
      })
    );
};
