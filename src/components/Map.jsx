import React from 'react';
import './Map.css';

const Map = () => {
  return (
    <div className="map-container">
      {/* You can integrate a map library like Google Maps or Leaflet here */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.427629198995!2d87.3100579149551!3d22.33771588530245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d441b1d1a1b3b%3A0x3b5b4b4b4b4b4b4b!2sIIT%20Kharagpur!5e0!3m2!1sen!2sin!4v1638286242435!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="IIT Kharagpur Location"
      ></iframe>
    </div>
  );
};

export default Map;
