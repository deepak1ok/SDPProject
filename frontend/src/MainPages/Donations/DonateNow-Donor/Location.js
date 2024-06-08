import { React, useState, useContext, useEffect } from "react";
import DraggableMarker from "./DisplayPosition";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ state, setState }) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, []);

  return (
    <>
      {latitude && (
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "290px ", margin: "10em 2em 5em" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <DraggableMarker state={state} setState={setState}></DraggableMarker>
        </MapContainer>
      )}
    </>
  );
}
