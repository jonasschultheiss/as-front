import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';
import CustomMarker from './marker';

const containerStyle = {
  height: '800px',
};

const center = {
  lat: 47.3769,
  lng: 8.5417,
};

function Map({ stations }) {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
      <GoogleMap mapContainerClassName="w-full h-full" mapContainerStyle={containerStyle} center={center} zoom={10}>
        {stations &&
          stations.map(({ id, name, latitude, longitude }, index) => (
            <CustomMarker key={index} id={id} name={name} latitude={latitude} longitude={longitude} />
          ))}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
