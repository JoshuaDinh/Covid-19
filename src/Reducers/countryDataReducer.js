import { FETCH_COUNTRY_INFO } from "../constants";
import { FETCH_COUNTRY_DATA } from "../constants";
import { SORTED_CASES } from "../constants";
import { SORTED_DEATHS } from "../constants";
import { SORTED_RECOVERED } from "../constants";
import { COUNTRIES } from "../constants";
import { MAP_COUNTRIES } from "../constants";

const countryDataState = {
  countryInfo: {},
  countryData: [],
  casesData: [],
  deathData: [],
  recoveredData: [],
  countries: [],
  mapCountries: [],
};

export const fetchCountryInfoReducer = (state = countryDataState, action) => {
  switch (action.type) {
    case FETCH_COUNTRY_INFO:
      return { ...state, countryInfo: action.payload };
    default:
      return state;
  }
};

export const fetchCountryDataReducer = (state = countryDataState, action) => {
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
    case MAP_COUNTRIES:
      return { ...state, mapCountries: action.payload };
    default:
      return state;
  }
};
