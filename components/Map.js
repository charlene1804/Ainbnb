import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = () => {
    const [viewport, setViewport] = useState({
        width:'100%',
        height:'100%',
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 10
      });
    return (
        <ReactMapGL
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle='mapbox://styles/asmatar/ckvuwwtir3eh515p6oka618vj'
        mapboxApiAccessToken={process.env.mapbox_key}
        // 'pk.eyJ1IjoiYXNtYXRhciIsImEiOiJja3ZtZHdhZXUwZ2lhMnJxZmVtc2VtOXR0In0.g97qCja8_WhL3Ooy9Bn8Pg'
        // {process.env.mapbox_key}
        />
    )
}

export default Map
