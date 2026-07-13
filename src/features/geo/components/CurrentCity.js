import CityInformation from "./CityInformation";
import GeoPhoto from "./GeoPhoto";

export default function CurrentCity({ geoObjName }) {

    return (
        <div className="currentCity">
            <div className="image">
                <GeoPhoto geoObjName={geoObjName} />
            </div>
            <CityInformation geoObjName={geoObjName} />
        </div>
    )
}