import getCenter from 'geolib/es/getCenter';
import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup }
    // ,{ Marker, Popup } 
    from 'react-map-gl';

const Map = ({searchResult}) => {

    const [selectedLocation, setSelectedLocation] = useState({})
      // transform searchResult object into another one {latitude:, longitude} object
    const coordinates = searchResult.searchResult.map(item => ({
        longitude: parseFloat(item.long),
        latitude: parseFloat(item.lat),
        })
    )
   
    // on the map we wanna be at the center around all thoses result
    const center = getCenter(coordinates)

    
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
        >
        {
            searchResult.searchResult.map(result=>( 
                <div key={result.id}>         
                <Marker
                        longitude={parseFloat(result.long)}
                        latitude={parseFloat(result.lat)}
                        offsetLeft={-20}
                        offsettop={-10}
                    >
                    <p onClick={()=>setSelectedLocation(result)} className='cursor-pointer text-xl animate-bounce' aria-label='push-pin'>📌</p>
                    {
                    parseFloat(selectedLocation.long) === parseFloat(result.long) 
                    ? (
                        <Popup 
                        onClose={() => setSelectedLocation({})}
                        closeOnClick={true} 
                        latitude={parseFloat(result.lat)}
                        longitude={parseFloat(result.long)}
                        className='w-72'
                        >
                        {result.title}
                          
                        </Popup>
                        ):(
                        false
                        )
                    }
                    </Marker>
                </div>
            ))  
        }
        </ReactMapGL>
    )
}

export default Map
