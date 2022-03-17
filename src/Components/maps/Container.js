import React, { useEffect, useRef } from "react";
import { API_ROOT } from "../../service";

const Container = () => {
  const mapRef = useRef();

  useEffect(() => {
    setTimeout(async () => {
      const riders = await fetchRiders();
      const map = new window.google.maps.Map(mapRef.current, {
        zoom: 11,
        center: { lat: 40.0, lng: -105.35 },
      });
      console.log({ riders });
      riders?.map((r) => createMarker(map, r));
    }, 500);
  }, []);

  const fetchRiders = async () => {
    const res = await fetch(`${API_ROOT}/riders`);

    return await res.json();
  };

  const createMarker = (map, rider) => {
    const [lat, lng] = rider.position
      .split(",")
      .map((geo) => geo.split(": ")[1]);

    const marker = new window.google.maps.Marker({
      animation: window.google.maps.Animation.DROP,
      position: { lat: Number(lat), lng: Number(lng) },
      map,
    });

    //const content = <Riders />;

    const infowindow = new window.google.maps.InfoWindow({
      content: `<h2>${rider.firstname} ${rider.lastname}</h2>`,
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  };

  return <div className="maps-box" ref={mapRef} />;
};

export default Container;
