import { FETCH_COUNTRY_INFO } from "../constants";

export const fetchCountryInfo = () => {
  return {
    type: FETCH_COUNTRY_INFO,
    payload: response.data,
  };
};
