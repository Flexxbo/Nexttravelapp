/******************************************
 *  Author : Flexxbo
 *  Created On : Wed May 20 2020
 *  File : Layout.js
 *******************************************/

import React from "react";
import { Map, TileLayer } from "react-leaflet";
import styles from "./Map.module.css";
import Markers from "./Markers.js";

export default function MyMap({ lat, lng }) {
  return (
    <Map className={styles.mapid} center={[lat, lng]} zoom={7}>
      <TileLayer
        className={styles.mapid}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers />
    </Map>
  );
}
//{/*addTo={addToTrip}*/}const addToTrip = (element) => {  console.log(element);}
