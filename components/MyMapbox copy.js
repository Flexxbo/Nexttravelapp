/******************************************
 *  Author : Flexxbo
 *  Created On : Wed May 20 2020
 *  File : Layout.js
 *******************************************/

import React from "react";
import { Map, TileLayer, CircleMarker, Circle, Polyline } from "react-leaflet";
import Markers from "./Markers.js";
import Polyline2 from "./Polyline.js";

export default function MyMap({
  lat,
  lng,
  addToTrip,
  datastate,
  selectMarker,
  poly,
}) {
  return (
    <Map className="mapid" center={[lat, lng]} zoom={7}>
      <TileLayer
        className="mapid"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers
        addToTrip={addToTrip}
        datastate={datastate.filter((element) => element.fields.location)}
        selectMarker={selectMarker}
      />
      <Polyline2 poly={poly} />
    </Map>
  );
}
