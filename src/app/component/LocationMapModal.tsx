import React from 'react';
import LocationMap from '../component/LocationMap';



import './LocationMapModal.css'; // Import external CSS file
const LocationMapModal = ({ isOpen, onClose, onLocationSelect }) => {
  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content">
        <LocationMap onLocationSelect={onLocationSelect} />
        <button className="modal-close is-large" onClick={onClose} aria-label="close"></button>
      </div>
     
    </div>
  );
};

export default LocationMapModal;