import { useState, useEffect } from "react";
import useUserCoordinates from "./useUserCoordinates";

export default function useImageByCoords(geoObjName) {

    const coords = useUserCoordinates(geoObjName);

    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        if (!coords) {
            setLoading(true);
            return;
        } else if (coords === 'Нет данных') {
            setImageUrl(null);
            setLoading(false);
            return;
        }

        async function fetchImage() {

            setError(null);
            setLoading(true);

            const [lat, lon] = coords;

            try {

                const searchRes = await fetch(`https://commons.wikimedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&gscoord=${lat}|${lon}&format=json&origin=*`);
                const searchData = await searchRes.json();

                if (!searchData.query?.geosearch?.length) {
                    throw new Error('нет изображений поблизости');
                }

                const pageId = searchData.query.geosearch[0].pageid;

                const imageRes = await fetch(`https://commons.wikimedia.org/w/api.php?action=query&prop=pageimages&pageids=${pageId}&pithumbsize=600&format=json&origin=*`);
                const imageData = await imageRes.json();

                const thumbnail = imageData.query?.pages[pageId]?.thumbnail?.source;

                if (!thumbnail) {
                    throw new Error('изображение не найдено');
                }

                setImageUrl(thumbnail);
            } catch (err) {
                setError(err.message);
                console.log(`Ошибка поиска изображения: ${error}`);
            } finally {
                setLoading(false);
            }
        }

        fetchImage();

    }, [coords]);

    return { imageUrl, loading, error };
}