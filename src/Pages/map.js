import React from "react";
// import MapContainer from "../components/maps/map_container";
import MapContainer from "../Components/maps/Container";

const Map = () => {
  return (
    <div className="map-page">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 px-0" >
            <img id="map-header-bg" src="/img/colorado.jpeg" alt="nature" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-xxl-9 col-md-11 col-sm-12 map-wrapper"
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
