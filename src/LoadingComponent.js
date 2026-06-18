import { BeatLoader } from 'react-spinners';

export default function LoadingComponent() {
    return (
        <span><BeatLoader
            size={5}
            speedMultiplier={0.4}
        /></span>
    );
}

