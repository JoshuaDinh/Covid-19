import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#ed3e15",
    rgb: "rgb(204, 16, 52)",
    multiplier: 400,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    multiplier: 600,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    multiplier: 1000,
  },
};

export const sortCases = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const sortDeaths = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.deaths > b.deaths) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const sortRecovered = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.recovered > b.recovered) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info-recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info-deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
