import { FETCH_COUNTRY_TOTALS } from "../constants";
import { FETCH_COUNTRY_DATA } from "../constants";
import { SORTED_CASES } from "../constants";
import { SORTED_DEATHS } from "../constants";
import { SORTED_RECOVERED } from "../constants";
import { COUNTRIES } from "../constants";
import { COUNTRY } from "../constants";

const countryDataState = {
  countryTotals: {},
  countryData: [],
  casesData: [],
  deathData: [],
  recoveredData: [],
  countries: [],
  country: "World Wide",
};

export const fetchCountryTotalsReducers = (
  state = countryDataState,
  action
) => {
  switch (action.type) {
    case FETCH_COUNTRY_TOTALS:
      return { ...state, countryTotals: action.payload };
    default:
      return state;
  }
};

export const fetchCountryDataReducers = (state = countryDataState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_DATA:
      return { ...state, countryData: action.payload };
    case SORTED_CASES:
      return { ...state, casesData: action.payload };
    case SORTED_DEATHS:
      return { ...state, deathData: action.payload };
    case SORTED_RECOVERED:
      return { ...state, recoveredData: action.payload };
    case COUNTRIES:
      return { ...state, countries: action.payload };
    default:
      return state;
  }
};

// export const getCountryReducer = (state = countryDataState, action) => {
//   switch (action.type) {
//     case COUNTRY:
//       return { ...state, country: action.payload };
//     default:
//       return state;
//   }
// };
