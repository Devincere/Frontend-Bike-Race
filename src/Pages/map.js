import React from "react";
// import MapContainer from "../components/maps/map_container";
import MapContainer from "../Components/maps/Container";

const Map = () => {
  return (
    <div className="map-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col" id="map-header-bg" />
        </div>
        <div className="row justify-content-center">
          <div
            className="col-md-11 col-sm-12 map-wrapper"
            id="map-container"
          >
            <h1 className="map-title text-center">Interactive Map</h1>
            <MapContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
