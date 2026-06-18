import useUserLocation from "./useUserLocation"
import useUserTimezone from "./useUserTimezone";
import useUserDate from "./useUserDate";
import LoadingComponent from "./LoadingComponent";

export default function CurrentCity({ geoObjName }) {

    const location = useUserLocation(geoObjName);
    const gmtOffset = useUserTimezone(geoObjName);
    const [time, date] = useUserDate(gmtOffset);

    const formatTimezone = () => {
        if (gmtOffset === null) return <LoadingComponent />;
        const hours = gmtOffset / 3600;
        return hours >= 0 ? `UTC+${hours}` : `UTC${hours}`;
    };

    return (
        <div className="currentCity">
            <div className="image">
                <img src="./images/village.png" alt="Изображение города" />
            </div>
            <div className="data">
                <p>Ваше текущее положение: {location || <LoadingComponent />}</p>
                <p>Дата: {date || <LoadingComponent />}</p>
                <p>Местное время: {time || <LoadingComponent />}</p>
                <p>Часовой пояс: {formatTimezone()}</p>
            </div>
        </div>
    )
}