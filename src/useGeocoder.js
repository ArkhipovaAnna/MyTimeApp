import { useState, useEffect } from "react";

export default function useGeocoder(geoObjName) {

    const apiKey = process.env.REACT_APP_YANDEX_GEOCODER_KEY;

    const [coords, setCoords] = useState(null);

    useEffect(() => {

        if (!geoObjName) return;

        fetch(`https://geocode-maps.yandex.ru/v1/?apikey=${apiKey}&geocode=${geoObjName}&lang=ru_RU&results=1&format=json`)
            .then(response => response.json())
            .then(data => {
                const coordsString = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
                const [lon, lat] = coordsString.split(' ');
                setCoords([Number(lat), Number(lon)]);
            })
            .catch(error => console.log(error.message))

    }, [geoObjName]);

    return coords;

}

// {
//     "response": {
//         "GeoObjectCollection": {
//             "metaDataProperty": {
//                 "GeocoderResponseMetaData": {
//                     "request": "Краснодар",
//                     "results": "1",
//                     "found": "1"
//                 }
//             },
//             "featureMember": [
//                 {
//                     "GeoObject": {
//                         "metaDataProperty": {
//                             "GeocoderMetaData": {
//                                 "precision": "other",
//                                 "text": "Россия, Краснодар",
//                                 "kind": "locality",
//                                 "Address": {
//                                     "country_code": "RU",
//                                     "formatted": "Россия, Краснодар",
//                                     "Components": [
//                                         {
//                                             "kind": "country",
//                                             "name": "Россия"
//                                         },
//                                         {
//                                             "kind": "province",
//                                             "name": "Южный федеральный округ"
//                                         },
//                                         {
//                                             "kind": "province",
//                                             "name": "Краснодарский край"
//                                         },
//                                         {
//                                             "kind": "area",
//                                             "name": "городской округ Краснодар"
//                                         },
//                                         {
//                                             "kind": "locality",
//                                             "name": "Краснодар"
//                                         }
//                                     ]
//                                 },
//                                 "AddressDetails": {
//                                     "Country": {
//                                         "AddressLine": "Россия, Краснодар",
//                                         "CountryNameCode": "RU",
//                                         "CountryName": "Россия",
//                                         "AdministrativeArea": {
//                                             "AdministrativeAreaName": "Краснодарский край",
//                                             "SubAdministrativeArea": {
//                                                 "SubAdministrativeAreaName": "городской округ Краснодар",
//                                                 "Locality": {
//                                                     "LocalityName": "Краснодар"
//                                                 }
//                                             }
//                                         }
//                                     }
//                                 }
//                             }
//                         },
//                         "name": "Краснодар",
//                         "description": "Россия",
//                         "boundedBy": {
//                             "Envelope": {
//                                 "lowerCorner": "38.785059 44.978295",
//                                 "upperCorner": "39.1863 45.1538"
//                             }
//                         },
//                         "uri": "ymapsbm1://geo?data=Cgg1MzE2NjEzOBIg0KDQvtGB0YHQuNGPLCDQmtGA0LDRgdC90L7QtNCw0YAiCg255htCFVMkNEI,",
//                         "Point": {
//                             "pos": "38.975313 45.03547"
//                         }
//                     }
//                 }
//             ]
//         }
//     }
// }