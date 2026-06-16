import { useState, useEffect } from "react";
import useUserCoordinates from "./useUserCoordinates";

export default function useUserLocation(geoObjName) {

    const coords = useUserCoordinates(geoObjName);
    const [location, setLocation] = useState();

    useEffect(() => {

        if (!coords) return;

        const [latitude, longitude] = coords;

        fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}&addressdetails=10&layer=address`, {
            headers: {
                'User-Agent': 'MyTimeApp/1.0(arkhipova.ania2014@yandex.ru)',
                'Accept-Language': 'ru'
            }
        })
            .then(response => response.json())
            .then(data => {
                const address = data.address;
                const name = address.city ?? address.town ?? address.village;
                setLocation(`${name}, ${address.country} `);
            })
            .catch(error => console.log(error.message))

    }, [coords]);

    return location;
}