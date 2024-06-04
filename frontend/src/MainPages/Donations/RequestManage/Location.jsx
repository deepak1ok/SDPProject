import { React, useState, useContext, useEffect } from "react";
import DraggableMarker from "./DisplayPosition";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


export default function Map({lat,lng,ngoLat,ngoLng}) {
    console.log(lat,lng,ngoLat,ngoLng)
  return (
    <>
      {lat && lng &&  (
        <MapContainer
          center={[lat,lng]}
          zoom={13}
          scrollWheelZoom={true}
          style={{ height: "200px ", margin: "10em 2em 5em" }}
        >
          <TileLayer
            attribution='&copy;<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <DraggableMarker lat={lat} lng={lng} ngoLat={ngoLat} ngoLng={ngoLng}></DraggableMarker>
        </MapContainer>
      )}
    </>
  );
}
