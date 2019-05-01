import { axiosInstance } from "../axios/axiosInstance";
import { FETCH_TOURS } from "../../constants/types";

export const setTours = tours => ({ type: FETCH_TOURS, tours });

export const getTours = (amount, page) => dispatch => {
  axiosInstance
    .get(`/tours?amount=${amount}&page=${page}`)
    .then(response => {
      dispatch(setTours(response.data));
    })
    .catch(error => {
      console.log(error);
    });
};
