import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import useUserCoordinates from "./useUserCoordinates";

const YandexMap = () => {

    const [latitude, longitude] = useUserCoordinates();

    if (!latitude || !longitude) return;

    return (
        <YMaps>
            <div style={{ width: '100%', height: '300px' }}>
                <Map
                    defaultState={{
                        center: [latitude, longitude],
                        zoom: 11,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                    width="100%"
                    height="90%">
                    <Placemark defaultGeometry={[latitude, longitude]} />
                </Map>
            </div>
        </YMaps>);
};

export default YandexMap;