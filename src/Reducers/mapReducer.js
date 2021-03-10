import { MAP_ZOOM } from "../constants";
import { MAP_CENTER } from "../constants";
import { MAP_COUNTRIES } from "../constants";
import { COUNTRY } from "../constants";
import { RECOVERY_DATA } from "../constants";

const initialMapState = {
  mapCenter: { lat: 34.80746, lng: -40.4796 },
  mapZoom: 3,
  mapCountries: [],
  recoveryData: [],
};

export const mapReducers = (state = initialMapState, action) => {
  switch (action.type) {
    case MAP_ZOOM:
      return { ...state, country: action.payload };
    case MAP_CENTER:
      return { ...state, country: action.payload };
    case MAP_COUNTRIES:
      return { ...state, country: action.payload };
    case COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};
