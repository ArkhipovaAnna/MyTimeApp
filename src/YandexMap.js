import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useRef, useEffect } from 'react';
import useUserCoordinates from "./useUserCoordinates";

const YandexMap = ({ geoObjName }) => {

    const result = useUserCoordinates(geoObjName);

    if (!result || result.includes(null)) {
        return
        <div className='loading'>
            Загрузка карты...
        </div>;
    }

    const [latitude, longitude] = result;

    return (
        <YMaps>
            <div style={{ width: '100%', height: '300px' }}>
                <Map
                    state={{
                        center: [latitude, longitude],
                        zoom: 11,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                    width="100%"
                    height="90%">
                    <Placemark geometry={[latitude, longitude]} />
                </Map>
            </div>
        </YMaps>);
};

export default YandexMap;

