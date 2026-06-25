import useUserLocation from "./useUserLocation"
import useUserTimezone from "./useUserTimezone";
import useUserDate from "./useUserDate";
import BeatLoaderComponent from "./BeatLoaderComponent";
import useTheme from "./useTheme";

export default function CityInformation({ geoObjName }) {

    const location = useUserLocation(geoObjName);
    const gmtOffset = useUserTimezone(geoObjName);
    const [time, date] = useUserDate(gmtOffset);

    const formatTimezone = () => {
        if (gmtOffset === null) return <BeatLoaderComponent />;
        const hours = gmtOffset / 3600;
        return hours >= 0 ? `UTC+${hours}` : `UTC${hours}`;
    };

    const [theme] = useTheme();
    const className = 'information-' + theme;

    return (
        <div className={`information ${className}`}>
            <p>{geoObjName ? 'Результаты поиска:' : 'Ваше текущее положение:'} {location || <BeatLoaderComponent />}</p>
            <p>Дата: {date || <BeatLoaderComponent />}</p>
            <p>Местное время: {time || <BeatLoaderComponent />}</p>
            <p>Часовой пояс: {formatTimezone()}</p>
        </div>
    )
}