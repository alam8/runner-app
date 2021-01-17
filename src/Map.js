import React from 'react'
import { GoogleMap, useJsApiLoader, Polyline } from '@react-google-maps/api';

const containerStyle = {
    height: '100vh',
    width: '100vh',
    position: 'relative',
};

const center = {
  lat: 38.539806488648885,
  lng: -121.76160229332712
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC6WETwHzQzM1N2x-68C1gOcP3Lgi2A0wU"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  function handleLoad(map) {
    map.current = map;
  }

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={handleLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        {/* <Polyline
          path={pathCoordinates}
          geodesic={true}
          options={{
              strokeColor: "#ff2527",
              strokeOpacity: 0.75,
              strokeWeight: 2,
          }}
        /> */}
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)