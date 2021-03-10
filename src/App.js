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
import { fetchCountryTotals } from "./Actions";
import { fetchCountryData } from "./Actions";
import { fetchMapInfo } from "./Actions/mapActions";

const App = ({
  fetchCountryTotals,
  fetchCountryData,
  fetchMapInfo,
  casesData,
  deathData,
  recoveredData,
  countryTotals,
  countries,
}) => {
  const [country, setInputCountry] = useState("World Wide");
  const [countryInfo, setCountryInfo] = useState({});
  const [mapCountries, setMapCountries] = useState([]);
  const [recoveryData, setRecoveryData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);

  useEffect(() => {
    fetchCountryTotals();
    fetchCountryData();
  }, []);

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
                onClick={(e) => setCasesType("cases")}
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
                onChange={fetchMapInfo}
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
              countries={mapCountries}
              casesType={casesType}
              center={mapCenter}
              zoom={mapZoom}
            />
          </div>
          <div className="app__stats-container">
            <div className="app__stats">
              <InfoBox
                secondary
                onClick={(e) => setCasesType("recovered")}
                title="Total Recovered"
                active={casesType === "recovered"}
                cases={prettyPrintStat(countryInfo.recovered)}
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
                onClick={(e) => setCasesType("deaths")}
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
    mapCountries: state.countryData.mapcountries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountryTotals: () => dispatch(fetchCountryTotals()),
    fetchCountryData: () => dispatch(fetchCountryData()),
    fetchMapInfo: () => dispatch(fetchMapInfo()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
