import React, { useState } from "react";
// import MapContainer from "../components/maps/map_container";
import MapContainer from "../Components/maps/Container";

const Map = () => {
  const [riders, setRiders] = useState([
    { id: 1, latitude: 40.0, longitude: -105.35 },
    { id: 2, latitude: 39.95, longitude: -105.24 },
    { id: 3, latitude: 40.06, longitude: -105.26 },
    { id: 4, latitude: 40.03, longitude: -105.23 },
    { id: 5, latitude: 40.04, longitude: -105.23 },
    { id: 6, latitude: 39.96, longitude: -105.22 },
    { id: 7, latitude: 39.98, longitude: -105.21 },
    { id: 8, latitude: 39.99, longitude: -105.25 },
    { id: 9, latitude: 40.01, longitude: -105.2 },
    { id: 10, latitude: 39.98, longitude: -105.24 },
    { id: 11, latitude: 39.99, longitude: -105.25 },
    { id: 12, latitude: 40.01, longitude: -105.29 },
    { id: 13, latitude: 39.97, longitude: -105.27 },
    { id: 14, latitude: 39.97, longitude: -105.33 },
    { id: 15, latitude: 40.0, longitude: -105.29 },
    { id: 16, latitude: 40.05, longitude: -105.3 },
    { id: 17, latitude: 39.99, longitude: -105.31 },
    { id: 18, latitude: 40.01, longitude: -105.32 },
  ]);

  return (
    <div className="map-content">
      <div className="container-fluid" id="map-header-bg"></div>
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
              <MapContainer riders={riders} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
