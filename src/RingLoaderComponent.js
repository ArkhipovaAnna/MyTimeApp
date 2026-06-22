import { RingLoader } from 'react-spinners';

export default function RingLoaderComponent() {
    return (
        <div style={{ display: "block" }}><RingLoader
            color="#25c5de"
            speedMultiplier={0.6}
        /></div>
    );
}

