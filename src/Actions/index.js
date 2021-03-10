import { FETCH_COUNTRY_INFO } from "../constants";
import { FETCH_COUNTRY_DATA } from "../constants";
import { SORTED_CASES } from "../constants";
import { SORTED_DEATHS } from "../constants";
import { SORTED_RECOVERED } from "../constants";
import { COUNTRIES } from "../constants";
import { MAP_COUNTRIES } from "../constants";

import { sortCases, sortDeaths, sortRecovered } from "../Utilities/util";

export const fetchCountryInfo = () => (dispatch) => {
  fetch("https://disease.sh/v3/covid-19/all")
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: FETCH_COUNTRY_INFO,
        payload: data,
      })
    );
};

export const fetchCountryData = () => (dispatch) => {
  fetch("https://disease.sh/v3/covid-19/countries")
    .then((response) => response.json())
    .then((data) => {
      const countries = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }));
      let sortedCases = sortCases(data);
      let sortedDeaths = sortDeaths(data);
      let sortedRecovered = sortRecovered(data);
      dispatch({
        type: FETCH_COUNTRY_DATA,
        payload: data,
      });
      dispatch({
        type: SORTED_CASES,
        payload: sortedCases,
      });
      dispatch({
        type: SORTED_DEATHS,
        payload: sortedDeaths,
      });
      dispatch({
        type: SORTED_RECOVERED,
        payload: sortedRecovered,
      });
      dispatch({
        type: COUNTRIES,
        payload: countries,
      });
      dispatch({
        type: MAP_COUNTRIES,
        payload: data,
      });
    });
};
