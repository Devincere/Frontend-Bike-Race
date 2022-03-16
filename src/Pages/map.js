import React from "react";
// import MapContainer from "../components/maps/map_container";
import MapContainer from "../Components/maps/Container";

const Map = () => {
  return (
    <div className="map-content">
      <div className="container-fluid" id="map-header-bg" />
      <div className="map-box">
        <div className="map-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-4 text-center map-title">
                <h1>Interactive Map</h1>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-11 col-sm-12" id="map-container">
                <MapContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
