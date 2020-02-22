import axios from "axios";

export const axiosWithAuth = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  return axios.create({
    baseURL: "https://essentialism-back-end.herokuapp.com/api",
    headers: {
      Authorization: token
    }
  });
};
// https://essentialism-back-end.herokuapp.com/api
