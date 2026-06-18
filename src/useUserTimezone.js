import { useState, useEffect } from 'react';
import useUserCoordinates from "./useUserCoordinates";

export default function useUserTimezone(geoObjName) {

    const apiKey = process.env.REACT_APP_TIMEZONEDB_KEY;

    const coords = useUserCoordinates(geoObjName);
    const [gmtOffset, setGmtOffset] = useState(null);

    useEffect(() => {

        if (!coords) {
            setGmtOffset(null);
            return;
        };

        const [latitude, longitude] = coords;

        fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${apiKey}&format=json&by=position&lat=${latitude}&lng=${longitude}`)
            .then(response => response.json())
            .then(data => setGmtOffset(data.gmtOffset))
            .catch(error => console.log(error.message));

    }, [coords])

    return gmtOffset;

}