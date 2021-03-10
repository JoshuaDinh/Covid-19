import { combineReducers } from "redux";
import { fetchCountryTotalsReducers } from "../Reducers/countryDataReducer";
import { fetchCountryDataReducers } from "../Reducers/countryDataReducer";
import { casesType } from "./uiReducers";
import { mapReducers } from "./mapReducer";

export const rootReducers = combineReducers({
  countryTotals: fetchCountryTotalsReducers,
  countryData: fetchCountryDataReducers,
  mapInfo: mapReducers,
  casesType: casesType,
});
