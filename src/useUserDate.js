import { useState, useEffect } from "react";

export default function useUserDate(gmtOffsetSeconds) {
    const [timeString, setTimeString] = useState("");
    const [dateString, setDateString] = useState("");

    useEffect(() => {

        if (gmtOffsetSeconds === null) {
            setTimeString(null);
            setDateString(null);
            return;
        };

        const updateClock = () => {

            const now = new Date(); // текущая системная дата

            const utcTime = now.getTime() + (now.getTimezoneOffset() * 60000); // текущее точное время UTC (в миллисекундах)

            const targetTime = new Date(utcTime + (gmtOffsetSeconds * 1000));  // дата искомого города (переводим секунды от API в миллисекунды)

            setTimeString(targetTime.toLocaleTimeString('ru-RU', {
                hour: "2-digit",
                minute: "2-digit"
            }));

            setDateString(targetTime.toLocaleDateString('ru-RU'));
        };

        // Запускаем часы сразу и настраиваем секундный интервал
        updateClock();
        const timerID = setInterval(updateClock, 1000);

        return () => clearInterval(timerID);
    }, [gmtOffsetSeconds]); // Эффект перезапустится, если пользователь выберет другой город

    return [timeString, dateString];
}
