import { useState, useEffect } from 'react';
import useUserCoordinates from "./useUserCoordinates";

export default function useUserTimezone() {

    const [latitude, longitude] = useUserCoordinates();
    const [timezone, setTimeZone] = useState();

    useEffect(() => {

        if (!latitude || !longitude) return;

        fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=5V0KUCFO06AA&format=json&by=position&lat=${latitude}&lng=${longitude}`)
            .then(response => response.json())
            .then(data => {
                const value = data.gmtOffset / 3600;
                setTimeZone(value);
            })
            .catch(error => console.log(error.message))

    }, [latitude, longitude])

    return timezone;

}
// 47.227620, 39.733790