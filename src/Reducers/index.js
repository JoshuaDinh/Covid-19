import { combineReducers } from "redux";
import { fetchCountryTotalsReducer } from "../Reducers/countryDataReducer";
import { fetchCountryDataReducer } from "../Reducers/countryDataReducer";
import { mapReducer } from "./mapReducer";

export const rootReducers = combineReducers({
  countryTotals: fetchCountryTotalsReducer,
  countryData: fetchCountryDataReducer,
  mapInfo: mapReducer,
});
