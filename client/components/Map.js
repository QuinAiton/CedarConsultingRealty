import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { useState, useRef, useCallback } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';

const Map = (props) => {
  // Handles Map Configuration
  const [viewport, setViewport] = useState({
    width: '50vw',
    height: '100vh',
    latitude: 49.235294,
    longitude: -123.001659,
    zoom: 10,
  });

  const mapRef = useRef();

  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  // handles Searchbar Component for Map
  const handleGeocoderViewportChange = useCallback((newViewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };
    return handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides,
    });
  }, []);

  const geojson = {
    type: 'FeatureCollection',
    features: [],
  };

  props.state.map((listing) => {
    geojson.features.push({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: listing.location.coordinates,
      },
    });
  });

  const layerStyle = {
    id: 'point',
    type: 'circle',
    paint: {
      'circle-radius': 10,
      'circle-color': '#007cbf',
    },
  };

  return (
    <ReactMapGL
      {...viewport}
      ref={mapRef}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      mapboxApiAccessToken={process.env.NEXT_MAPBOX_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Source id='my-data' type='geojson' data={geojson}>
        <Layer {...layerStyle} />
      </Source>

      <Geocoder
        mapRef={mapRef}
        onViewportChange={handleGeocoderViewportChange}
        mapboxApiAccessToken={process.env.NEXT_MAPBOX_TOKEN}
        position='top-left'
      />
    </ReactMapGL>
  );
};

export default Map;
