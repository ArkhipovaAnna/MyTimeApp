export default function useUserTime() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const timerID = setInterval(() => setTime(new Date()), 1000);

        return () => clearInterval(timerID);

    }, [])

    return time;
}