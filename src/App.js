import React, { useState, useEffect } from "react";
import "./App.css";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import InfoBox from "./Components/InfoBox/InfoBox";
import Table from "./Components/Table/Table";
import {
  sortCases,
  sortDeaths,
  sortRecovered,
  prettyPrintStat,
} from "./Utilities/util";
import numeral from "numeral";
import Map from "./Components/Map/Map";
import "leaflet/dist/leaflet.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchCountryTotals,
  fetchCountryData,
  getCountry,
} from "./Actions/countryActions";
import { fetchMapInfo } from "./Actions/mapActions";
import { casesType } from "./Actions/uiActions";

const App = ({
  fetchCountryTotals,
  fetchCountryData,
  fetchMapInfo,
  toggleCasesType,
  casesType,
  casesData,
  deathData,
  recoveredData,
  countryTotals,
  countries,
  // mapZoom,
  mapCenter,
  mapCountries,
  country,
}) => {
  // const [country, setInputCountry] = useState("World Wide");
  // const [countryInfo, setCountryInfo] = useState({});
  // const [mapCountries, setMapCountries] = useState([]);
  // const [recoveryData, setRecoveryData] = useState([]);
  // const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(() => {
    fetchMapInfo();
    fetchCountryTotals();
    fetchCountryData();
  }, []);

  // const onCountryChange = async (e) => {
  //   const countryCode = e.target.value;
  //   const url =
  //     countryCode === "World Wide"
  //       ? "https://disease.sh/v3/covid-19/all"
  //       : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
  //   await fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setInputCountry(countryCode);
  //       setCountryInfo(data);
  //       setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
  //       setMapZoom(2);
  //     });
  // };
  const countryCases = casesData.map((country) => {
    return (
      <tr>
        <td>
          <strong>{numeral(country.cases).format("0,0")}</strong>
        </td>
        <td>{country.country}</td>
      </tr>
    );
  });

  const countryDeaths = deathData.map((country) => {
    return (
      <tr>
        <td>
          <strong>{numeral(country.deaths).format("0,0")}</strong>
        </td>
        <td>{country.country}</td>
      </tr>
    );
  });

  const countryRecovered = recoveredData.map((country) => {
    return (
      <tr>
        <td>
          <strong>{numeral(country.recovered).format("0,0")}</strong>
        </td>
        <td>{country.country}</td>
      </tr>
    );
  });

  return (
    <Router>
      <Route path="/">
        <div className="app">
          <div className="app__right">
            <div>
              <InfoBox
                onClick={(e) => toggleCasesType("cases")}
                title="Total Cases"
                isRed
                active={casesType === "cases"}
                cases={prettyPrintStat(countryTotals.cases)}
                total={numeral(countryTotals.cases).format("0.0a")}
              />
            </div>
            <Table
              title="Confirmed Cases by Country:"
              tableInfo={countryCases}
            />
          </div>
          <div className="app__left">
            <FormControl className="app__dropdown">
              <Select
                className="app__dropdown-menu"
                value={country}
                onChange={(e) => fetchMapInfo(e.target.value)}
              >
                <MenuItem className="app__dropdown-menu" value={country}>
                  {country}
                </MenuItem>
                {countries.map((country) => (
                  <MenuItem
                    className="app__dropdown-menu"
                    value={country.value}
                  >
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Map
            // mapCountries={mapCountries}
            // casesType={casesType}
            // center={mapCenter}
            // zoom={mapZoom}
            />
          </div>
          <div className="app__stats-container">
            <div className="app__stats">
              <InfoBox
                secondary
                onClick={(text) => toggleCasesType("recovered")}
                title="Total Recovered"
                active={casesType === "recovered"}
                cases={prettyPrintStat(countryTotals.recovered)}
                total={numeral(countryTotals.recovered).format("0.0a")}
              />

              <Table
                secondary
                title=" Recovered Cases by Country:"
                tableInfo={countryRecovered}
              />
            </div>
            <div className="app__stats">
              <InfoBox
                secondary
                onClick={(text) => toggleCasesType("deaths")}
                title="Total  Deaths"
                isRed
                active={casesType === "deaths"}
                cases={prettyPrintStat(countryTotals.deaths)}
                total={numeral(countryTotals.deaths).format("0.0a")}
              />

              <Table
                secondary
                title="Total deaths by Country:"
                tableInfo={countryDeaths}
              />
            </div>
          </div>
        </div>
      </Route>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    countryTotals: state.countryTotals.countryTotals,
    casesData: state.countryData.casesData,
    deathData: state.countryData.deathData,
    recoveredData: state.countryData.recoveredData,
    countries: state.countryData.countries,
    country: state.countryData.country,
    mapCountries: state.mapInfo.mapCountries,
    casesType: state.casesType.casesType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountryTotals: () => dispatch(fetchCountryTotals()),
    fetchCountryData: () => dispatch(fetchCountryData()),
    fetchMapInfo: (e) => dispatch(fetchMapInfo(e)),
    toggleCasesType: (text) => dispatch(casesType(text)),
    // updateCountry: (text) => dispatch(getCountry(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
