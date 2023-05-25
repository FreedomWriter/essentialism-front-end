import axios from "axios";

import { ZEN_LOAD_START, ZEN_LOAD_SUCCESS, ZEN_LOAD_FAILURE } from "v2/utils";

export const getZen = () => (dispatch) => {
  dispatch({ type: ZEN_LOAD_START });
  axios
    .get(`https://api.github.com/zen`)
    .then((res) => {
      dispatch({ type: ZEN_LOAD_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ZEN_LOAD_FAILURE, payload: err });
    });
};
