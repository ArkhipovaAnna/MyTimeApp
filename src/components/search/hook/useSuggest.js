import { useState, useEffect } from "react";

export default function useSuggest(str) {

    const apiKey = process.env.REACT_APP_YANDEX_GEOSUGGEST_KEY;

    const [hints, setHints] = useState([]);

    useEffect(() => {

        if (!str || str.trim() === '') {
            setHints([]);
            return;
        };

        const handler = setTimeout(() => {

            fetch(`https://suggest-maps.yandex.ru/v1/suggest?apikey=${apiKey}&text=${str}&types=locality&results=4`)
                .then(response => response.json())
                .then(data => {
                    if (data && data.results) {
                        let temp = [];
                        for (let elem of data.results) {
                            temp.push(elem.title.text);
                        }
                        setHints(temp);
                    }
                })
                .catch(error => console.error("Ошибка геосаджеста: ", error.message));
        }, 250);

        return () => clearTimeout(handler);

    }, [str]);

    return hints;
}