import * as React from 'react';
import ReactMapGL from 'react-map-gl';

const map = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    width: '100%',
    height: '100%',
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      Markers Here
    </ReactMapGL>
  );
};

export default map;
