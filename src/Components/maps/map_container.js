import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

class MapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { latitude: 40.0, longitude: -105.35 },
        { latitude: 39.95, longitude: -105.24 },
        { latitude: 40.06, longitude: -105.26 },
        { latitude: 40.03, longitude: -105.23 },
        { latitude: 40.04, longitude: -105.23 },
        { latitude: 39.96, longitude: -105.22 },
        { latitude: 39.98, longitude: -105.21 },
        { latitude: 39.99, longitude: -105.25 },
        { latitude: 40.01, longitude: -105.2 },
        { latitude: 39.98, longitude: -105.24 },
        { latitude: 39.99, longitude: -105.25 },
        { latitude: 40.01, longitude: -105.29 },
        { latitude: 39.97, longitude: -105.27 },
        { latitude: 39.97, longitude: -105.33 },
        { latitude: 40.0, longitude: -105.29 },
        { latitude: 40.05, longitude: -105.3 },
        { latitude: 39.99, longitude: -105.31 },
        { latitude: 40.01, longitude: -105.32 },
      ],
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude,
          }}
          label={{
            text: "\ue52f",
            fontFamily: "Material Icons",
            color: "white",
            fontSize: "15px",
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={mapStyles}
        initialCenter={{ lat: 40.0, lng: -105.35 }}
      >
        {this.displayMarkers()}
        
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyC8LtfQbg9Y5zJj5hFvd5f2qOEGljWZEKQ",
})(MapContainer);
