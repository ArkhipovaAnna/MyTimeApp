import { useState, useEffect } from "react";

export default function useGeocoder(geoObjName) {

    const apiKey = process.env.REACT_APP_YANDEX_GEOCODER_KEY;

    const [coords, setCoords] = useState(null);

    useEffect(() => {

        if (!geoObjName) return;

        setCoords(null);

        fetch(`https://geocode-maps.yandex.ru/v1/?apikey=${apiKey}&geocode=${geoObjName}&lang=ru_RU&results=1&format=json`)
            .then(response => response.json())
            .then(data => {
                if (!data.response.GeoObjectCollection.featureMember[0]) {
                    setCoords('Нет данных');
                    return;
                }
                const coordsString = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
                const [lon, lat] = coordsString.split(' ');
                setCoords([Number(lat), Number(lon)]);
            })
            .catch(error => console.log(error.message))

    }, [geoObjName]);

    return coords;

}
