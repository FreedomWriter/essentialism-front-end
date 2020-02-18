import axios from "axios";

export const ZEN_LOAD_START = "ZEN_LOAD_START";
export const ZEN_LOAD_SUCCESS = "ZEN_LOAD_SUCCESS";
export const ZEN_LOAD_FAILURE = "ZEN_LOAD_FAILURE";

export const getZen = () => dispatch => {
  dispatch({ type: ZEN_LOAD_START });
  axios
    .get(`https://api.github.com/zen`)
    .then(res => {
      dispatch({ type: ZEN_LOAD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ZEN_LOAD_FAILURE, payload: err });
    });
};
