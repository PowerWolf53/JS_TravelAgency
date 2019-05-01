import { FETCH_TOURS } from "../../constants/types";

const initialState = {
  tours: [],
  amount: 12,
  page: 1
};

export const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOURS:
      return {
        ...state,
        tours: action.tours
      };
    default:
      return { ...state };
  }
};
