import React from 'react'
// import { MapContainer } from "react-leaflet/MapContainer";
// import { TileLayer } from "react-leaflet/TileLayer";
// import { useMap } from "react-leaflet/hooks";
// import { Marker } from 'react-leaflet';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
const Map = ({lat,long}) => {

  return (
    <div id="mapContainer">
      
      <MapContainer
        id="map"
        center={[lat, long]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, long]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map