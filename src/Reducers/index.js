import { combineReducers } from "redux";
import { countryDataReducer } from "../Reducers/countryDataReducer";

export const rootReducers = combineReducers({
  countryData: countryDataReducer,
});
