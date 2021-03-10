import { combineReducers } from "redux";
import { fetchCountryInfoReducer } from "../Reducers/countryDataReducer";
import { fetchCountryDataReducer } from "../Reducers/countryDataReducer";

export const rootReducers = combineReducers({
  countryInfo: fetchCountryInfoReducer,
  countryData: fetchCountryDataReducer,
});
