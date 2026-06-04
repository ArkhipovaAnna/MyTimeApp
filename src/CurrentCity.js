import useUserLocation from "./useUserLocation"
import useUserTimezone from "./useUserTimezone";

export default function CurrentCity() {
    const location = useUserLocation();
    const timezone = useUserTimezone();

    return (
        <div className="currentCity">
            <div className="image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Rostov_City_Hall_2021.jpg/250px-Rostov_City_Hall_2021.jpg" alt="Изображение города" />
            </div>
            <div className="data">
                <p>Ваше текущее положение: {location}</p>
                <p>Местное время:</p>
                <p>Часовой пояс: UTC{timezone ? `+${timezone}` : timezone}</p>
            </div>
        </div>
    )
}