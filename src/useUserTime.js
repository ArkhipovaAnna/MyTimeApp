import { useState, useEffect } from "react";

export default function useUserTime() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const timerID = setInterval(() => setTime(new Date()), 1000);

        return () => clearInterval(timerID);

    }, [])

    return time.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" });
}