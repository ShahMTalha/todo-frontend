import { apiInstance as axios } from "./apiConfig";
export const get = (url, options = {}) => {
  return axios.get(url, options);
};

export const post = (url, data = null, options = {}) => {
  return axios.post(url, data, options);
};
