import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import * as React from 'react';
import { useState, useRef, useCallback } from 'react';
import ReactMapGL from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';

const map = () => {
  const [viewport, setViewport] = useState({
    width: '50vw',
    height: '100vh',
    latitude: 49.06245087463475,
    longitude: -123.46848129153817,
    zoom: 8,
  });

  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  const handleGeocoderViewportChange = useCallback((newViewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides,
    });
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      ref={mapRef}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      mapboxApiAccessToken={process.env.NEXT_MAPBOX_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Geocoder
        mapRef={mapRef}
        onViewportChange={handleGeocoderViewportChange}
        mapboxApiAccessToken={process.env.NEXT_MAPBOX_TOKEN}
        position='top-left'
      />
    </ReactMapGL>
  );
};

export default map;
