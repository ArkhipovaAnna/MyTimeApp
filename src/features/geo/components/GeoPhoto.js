import useImageByCoords from "../hooks/useImageByCoords";
import BeatLoaderComponent from "../../../components/loaders/BeatLoaderComponent";

export default function GeoPhoto({ geoObjName }) {

    const { imageUrl, loading, error } = useImageByCoords(geoObjName);

    if (loading) return (<div>Загрузка <BeatLoaderComponent /></div>);
    if (error || !imageUrl) return <img src="/images/image.png" alt="Изображение города" />;

    return <img src={imageUrl} alt="Город" />;
}