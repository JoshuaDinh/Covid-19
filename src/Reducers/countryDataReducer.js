import { AccordionActions } from "@material-ui/core";
import { FETCH_COUNTRY_INFO } from "./constants";

const countryDataState = {
  countryInfo: [],
};

export const fetchCountryInfo = ((state, action) = () => {
  switch (action.type) {
    case FETCH_COUNTRY_INFO:
      fetch("https://disease.sh/v3/covid-19/all")
        .then((response) => response.json())
        .then((data) => {
          return { ...state, countryInfo: data };
        });
    default:
      return state;
  }
});
