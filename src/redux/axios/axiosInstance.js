import * as axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/Travel"
});
