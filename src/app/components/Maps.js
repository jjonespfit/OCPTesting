import React from "react";
import { GoogleMap, Marker, Circle, LoadScript } from "@react-google-maps/api";

const Maps = ({ center, stores, googleMapsApiKey }) => {
  const containerStyle = {
    width: "80%",
    height: "400px",
  };

  const defaultCenter = {
    lat: center.latitude,
    lng: center.longitude,
  };

  // 10 miles in meters
  const radiusInMeters = 5 * 1609.34;

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={defaultCenter} zoom={12}>
        <Marker position={defaultCenter} label="You" />
        {stores.map((store, index) => (
          <Marker key={index} position={{ lat: store.latitude, lng: store.longitude }} title={store.name} />
        ))}
        <Circle
          center={defaultCenter}
          radius={radiusInMeters}
          options={{
            fillColor: "lightblue",
            fillOpacity: 0.2,
            strokeColor: "blue",
            strokeOpacity: 0.5,
            strokeWeight: 1,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default Maps;
