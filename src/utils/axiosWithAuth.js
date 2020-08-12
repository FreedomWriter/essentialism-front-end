import axios from "axios";

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("threeToken"));

  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      Authorization: token,
    },
  });
};
// https://essentialism-back-end.herokuapp.com/api
// "http://localhost:5000/api",
