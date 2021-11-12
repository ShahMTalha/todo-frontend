import axios from "axios";

const config = {
  baseURL: "http://0.0.0.0:5000/todo/"
};

export const apiInstance = axios.create(config);
