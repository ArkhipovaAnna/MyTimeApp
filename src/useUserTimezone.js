import { useState, useEffect } from 'react';
import useUserCoordinates from "./useUserCoordinates";

export default function useUserTimezone(geoObjName) {

    const coords = useUserCoordinates(geoObjName);
    const [timezone, setTimeZone] = useState();

    useEffect(() => {

        if (!coords) return;
        const [latitude, longitude] = coords;

        fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=5V0KUCFO06AA&format=json&by=position&lat=${latitude}&lng=${longitude}`)
            .then(response => response.json())
            .then(data => {
                let value = data.gmtOffset / 3600;
                if (value > 0) value = `+${value}`;
                setTimeZone(value);
            })
            .catch(error => console.log(error.message))

    }, [coords])

    return timezone;

}