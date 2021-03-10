import { FETCH_MAP_INFO } from "../constants";
import { COUNTRY_INFO } from "../constants";
import { COUNTRIES } from "../constants";
import { MAP_ZOOM } from "../constants";
import { MAP_CENTER } from "../constants";
import { MAP_COUNTRIES } from "../constants";
import { COUNTRY } from "../constants";
import { CASES_TYPE } from "../constants";
import { RECOVERY_DATA } from "../constants";

export const fetchMapInfo = () => async (dispatch, e) => {
  const countryCode = e.target.value;
  const url =
    countryCode === "worldwide"
      ? "https://disease.sh/v3/covid-19/all"
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
  await fetch(url)
    .then((response) => response.json())
    .then(
      (data) => dispatch({ type: FETCH_MAP_INFO, payload: data }),
      (data) =>
        dispatch({
          type: MAP_CENTER,
          payload: [data.countryInfo.lat, data.countryInfo.long],
        }),
      (data) =>
        dispatch({
          type: COUNTRY_INFO,
          payload: data,
        }),
      dispatch({ type: COUNTRY, payload: countryCode }),
      dispatch({ type: MAP_ZOOM, payload: 2 })
    );
};

// const onCountryChange = async (e) => {
//     const countryCode = e.target.value;
//     const url =
//       countryCode === "worldwide"
//         ? "https://disease.sh/v3/covid-19/all"
//         : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
//     await fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         setInputCountry(countryCode);
//         setCountryInfo(data);
//         setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
//         setMapZoom(2);
//       });
//   };
