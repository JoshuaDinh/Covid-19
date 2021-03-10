import { COUNTRIES } from "../constants";
import { MAP_ZOOM } from "../constants";
import { MAP_CENTER } from "../constants";
import { MAP_COUNTRIES } from "../constants";
import { COUNTRY } from "../constants";
import { CASES_TYPE } from "../constants";
import { RECOVERY_DATA } from "../constants";

const initialMapState = {
  country: "WorldWide",
  casesType: "cases",
  mapCenter: { lat: 34.80746, lng: -40.4796 },
  mapZoom: 3,
  mapCountries: [],
  recoveryData: [],
};

export const mapReducer = (state = initialMapState, action) => {
  switch (action.type) {
    case COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};
