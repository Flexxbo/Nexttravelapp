/******************************************
 *  Author : Flexxbo
 *  Created On : Wed May 20 2020
 *  File : Layout.js
 *******************************************/

import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
//import L from "leaflet";
import styles from "./Map.module.css";
import Markers from "../Markers.js";

//import "./MyMap.css";

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
// 




/*
import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import styles from "./Map.module.css";

//import "./MyMap.css";

export default function MyMap({ lat, lng }) {
  return (
    <Map id={styles.mapid} center={[lat, lng]} zoom={100}>
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
*/