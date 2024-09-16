// components/MapComponent.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

 import './mapstyle.css';
const MapComponent = ({ onClose }) => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      navigator.geolocation.getCurrentPosition(
        (pos) => {

            console.log("current location",pos.coords.latitude,pos.coords.longitude)
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }, []);

  return (
    <div className="map-container">
      {position ? (
        <MapContainer center={position} zoom={13} >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={new L.Icon({
            iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
            shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
            iconSize: [38, 95],
            shadowSize: [50, 64],
            iconAnchor: [22, 94],
            shadowAnchor: [4, 62],
            popupAnchor: [-3, -76]
          })}>
            <Popup>
              You are here
            </Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
      <button onClick={onClose} className="close-button">
        Close Map
      </button>
    </div>
  );
};

export default MapComponent;
