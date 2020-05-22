import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";

//import "./MyMap.css";

export default function MyMap({ lat, lng }) {
  return (
    <Map id="mapid" center={[lat, lng]} zoom={20}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]}>
        <Popup>Hey!</Popup>
      </Marker>
    </Map>
  );
}
