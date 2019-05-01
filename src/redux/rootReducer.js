import { toursReducer } from "./reducers/toursReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  toursModule: toursReducer
});
