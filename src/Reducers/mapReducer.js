import { FETCH_MAP_INFO, MAP_ZOOM, FETCH_COUNTRY_TOTALS } from "../constants";
import { MAP_CENTER } from "../constants";
import { MAP_COUNTRIES } from "../constants";
import { COUNTRY } from "../constants";
import { RECOVERY_DATA } from "../constants";

const initialMapState = {
  mapCenter: { lat: 34.80746, lng: -40.4796 },
  mapZoom: 3,
  mapCountries: [],
  recoveryData: [],
  mapInfo: [],
  countryTotals: {},
};

export const mapReducers = (state = initialMapState, action) => {
  switch (action.type) {
    case FETCH_MAP_INFO:
      return { ...state, mapInfo: action.payload };
    case COUNTRY:
      return { ...state, country: action.payload };
    case FETCH_COUNTRY_TOTALS:
      return { ...state, countryTotals: action.payload };
    case MAP_CENTER:
      return { ...state, mapCenter: state.mapCenter };
    case MAP_ZOOM:
      return { ...state, mapZoom: state.mapZoom };
    case MAP_COUNTRIES:
      return { ...state, mapCountries: action.payload };
    default:
      return state;
  }
};
