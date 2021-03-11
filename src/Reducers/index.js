import { combineReducers } from "redux";
import {
  fetchCountryTotalsReducers,
  fetchCountryDataReducers,
  getCountryReducer,
} from "../Reducers/countryDataReducer";
import { casesTypeReducer } from "./uiReducers";
import { mapReducers } from "./mapReducer";

export const rootReducers = combineReducers({
  countryTotals: fetchCountryTotalsReducers,
  countryData: fetchCountryDataReducers,
  mapInfo: mapReducers,
  casesType: casesTypeReducer,
  // getCountry: getCountryReducer,
});
