import React from 'react';
import { GoogleMap, LoadScript} from '@react-google-maps/api';

const containerStyle = {
  marginTop : '70px' ,
  width: '100%',
  height: '400px'
};

const center = {
  lat: 6.410309,
  lng: 2.343957
};

function Map() {

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBV-mzLmJPWcpCduBsUNXKmACjwgGA7yCM"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
