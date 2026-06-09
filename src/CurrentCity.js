import useUserLocation from "./useUserLocation"
import useUserTimezone from "./useUserTimezone";
import useUserTime from "./useUserTime";

export default function CurrentCity() {
    const location = useUserLocation();
    const timezone = useUserTimezone();
    const time = useUserTime();

    return (
        <div className="currentCity">
            <div className="image">
                <img src="./images/village.png" alt="Изображение города" />
            </div>
            <div className="data">
                <p>Ваше текущее положение: {location}</p>
                <p>Местное время: {time}</p>
                <p>Часовой пояс: UTC{timezone}</p>
            </div>
        </div>
    )
}