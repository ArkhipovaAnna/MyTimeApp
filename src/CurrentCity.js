import useUserLocation from "./useUserLocation"
import useUserTimezone from "./useUserTimezone";
import useUserDate from "./useUserDate";

export default function CurrentCity({ geoObjName }) {
    const location = useUserLocation(geoObjName);
    const timezone = useUserTimezone(geoObjName);
    const [time, date] = useUserDate();

    return (
        <div className="currentCity">
            <div className="image">
                <img src="./images/village.png" alt="Изображение города" />
            </div>
            <div className="data">
                <p>Ваше текущее положение: {location}</p>
                <p>Дата: {date}</p>
                <p>Местное время: {time}</p>
                <p>Часовой пояс: UTC{timezone}</p>
            </div>
        </div>
    )
}