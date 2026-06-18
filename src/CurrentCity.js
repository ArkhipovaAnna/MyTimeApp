import useUserLocation from "./useUserLocation"
import useUserTimezone from "./useUserTimezone";
import useUserDate from "./useUserDate";

export default function CurrentCity({ geoObjName }) {

    const location = useUserLocation(geoObjName);
    const gmtOffset = useUserTimezone(geoObjName);
    const [time, date] = useUserDate(gmtOffset);

    const formatTimezone = () => {
        if (gmtOffset === null) return "...";
        const hours = gmtOffset / 3600;
        return hours >= 0 ? `UTC+${hours}` : `UTC${hours}`;
    };

    return (
        <div className="currentCity">
            <div className="image">
                <img src="./images/village.png" alt="Изображение города" />
            </div>
            <div className="data">
                <p>Ваше текущее положение: {location || "Определение..."}</p>
                <p>Дата: {date || "..."}</p>
                <p>Местное время: {time || "..."}</p>
                <p>Часовой пояс: {formatTimezone()}</p>
            </div>
        </div>
    )
}