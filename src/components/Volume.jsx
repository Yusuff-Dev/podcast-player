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
            {/* <progress onClick={(e) => controlVol(e)} className="progress w-[100px] rounded-full cursor-pointer" value="0.5" max="1"></progress>  */}
        </>
    )
}

export default Volume