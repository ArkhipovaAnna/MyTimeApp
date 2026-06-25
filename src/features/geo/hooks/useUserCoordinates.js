import { useState, useEffect } from 'react';
import useGeocoder from './useGeocoder';

export default function useUserCoordinates(geoObjName) {

  const [geolocationCoords, setGeolocationCoords] = useState(null);
  const [error, setError] = useState(null);

  const geocoderCoords = useGeocoder(geoObjName);

  useEffect(() => {

    if (!navigator.geolocation) {
      setError('Геолокация не поддерживается браузером');
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const coord = position.coords;
      setGeolocationCoords([coord.latitude, coord.longitude]);
    },
      (err) => {
        setError(err);
        console.log(`ERROR(${error.code}): ${error.message}`);
      })
  }, []);


  if (geoObjName) {
    return geocoderCoords;
  }

  return geolocationCoords;
}

