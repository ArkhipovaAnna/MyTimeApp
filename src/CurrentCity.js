import CityInformation from "./CityInformation";

export default function CurrentCity({ geoObjName }) {

    return (
        <div className="currentCity">
            <div className="image">
                <img src="./images/village.png" alt="Изображение города" />
            </div>
            <CityInformation geoObjName={geoObjName} />
        </div>
    )
}