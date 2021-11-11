import getCenter from 'geolib/es/getCenter';
import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const Map = ({searchResult}) => {

      // transform searchResult object into another one {latitude:, longitude} object
    const coordinates = searchResult.map(item => ({
        longitude: item.long,
        latitude: item.lat,
        })
    )
    console.log(coordinates)
    // on the map we wanna be at the center around all thoses result
    const center = getCenter(coordinates)
    console.log('center of the result',center)

    // put props into the map
    const [viewport, setViewport] = useState({
        width:'100%',
        height:'100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 10
      });

    return (
        <ReactMapGL
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        mapStyle='mapbox://styles/asmatar/ckvuwwtir3eh515p6oka618vj'
        mapboxApiAccessToken={process.env.mapbox_key}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        />
    )
}

export default Map
