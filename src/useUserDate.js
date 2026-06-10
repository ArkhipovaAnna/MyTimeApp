import { useState, useEffect } from "react";

export default function useUserDate() {

    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const timerID = setInterval(() => setDate(new Date()), 1000);

        return () => clearInterval(timerID);

    }, [])

    return [date.toLocaleTimeString('ru-RU', { hour12: false, hour: "2-digit", minute: "2-digit" }), date.toLocaleDateString('ru-RU')];
}