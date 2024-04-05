import { usePlayerContext } from "../context/PlayerContext";
import { GrVolume, GrVolumeMute } from "react-icons/gr";

function Volume() {
    const { mute, isMute, controlVol, volume } = usePlayerContext();
    return (
        <>
            <button onClick={mute} className="cursor-pointer">
                {
                    isMute ? <GrVolumeMute size={24} /> : <GrVolume size={24} />
                }
            </button>
        </>
    )
}

export default Volume