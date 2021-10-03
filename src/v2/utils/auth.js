import GoTrue from "gotrue-js";

export const auth = new GoTrue({
  APIUrl: process.env.REACT_APP_NETLIFY_DOMAIN,
  audience: "",
  setCookie: true,
});
