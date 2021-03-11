import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "./Map.css";
import { showDataOnMap } from "../../Utilities/util";
import { connect } from "react-redux";

const Map = ({ mapCountries, casesType, mapCenter, mapZoom }) => {
  return (
    <div className="map">
      <LeafletMap center={mapCenter} zoom={mapZoom}>
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(mapCountries, casesType)}
      </LeafletMap>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mapCountries: state.mapInfo.mapCountries,
    mapCenter: state.mapInfo.mapCenter,
    mapZoom: state.mapInfo.mapZoom,
    casesType: state.casesType.caseType,
  };
};
export default connect(mapStateToProps)(Map);
