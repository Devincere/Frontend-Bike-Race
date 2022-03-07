import React, { useEffect, useRef, useState } from "react";
import Riders from "./FetchRiders";

const Container = ({ riders }) => {
  const mapRef = useRef();

  const [pins, setPins] = useState([]);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      zoom: 11,
      center: { lat: 40.0, lng: -105.35 },
    });

    riders.map((r) => createMarker(map, r));
  }, []);

  const createMarker = (map, rider) => {
    const marker = new window.google.maps.Marker({
      animation: window.google.maps.Animation.DROP,
      position: { lat: rider.latitude, lng: rider.longitude },
      map,
    });

    const content =
      <Riders/>;

    const infowindow = new window.google.maps.InfoWindow({
      content: content,
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });

    setPins([...pins, { id: rider.id, marker }]);
  };

  console.log(pins);
  return <div style={{ height: 500, width: "100%" }} ref={mapRef} />;
};

export default Container;
