import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const map = () => {
  const [viewport, setViewport] = useState({
    width: '50vw',
    height: '100vh',
    latitude: 49.06245087463475,
    longitude: -123.46848129153817,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle='mapbox://styles/mapbox/streets-v9'
      mapboxApiAccessToken={process.env.NEXT_MAPBOX_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    />
  );
};

export default map;
