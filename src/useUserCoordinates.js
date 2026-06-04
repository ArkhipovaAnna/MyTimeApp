import { useState, useEffect } from 'react';

export default function useUserCoordinates() {
  const [coordinates, setCoordinates] = useState([null, null]);
  const [error, setError] = useState(null);

  useEffect(() => {

    if (!navigator.geolocation) {
      setError('Геолокация не поддерживается браузером');
      return;
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const coord = position.coords;
      setCoordinates([coord.latitude, coord.longitude]);
    },
      (err) => {
        setError(err);
        console.log(`ERROR(${error.code}): ${error.message}`);
      })
  }, [])

  return coordinates;
}

