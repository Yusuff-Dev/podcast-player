import { GrRotateRight, GrVolume, GrVolumeLow, GrVolumeMute } from "react-icons/gr";
import { usePlayerContext } from "../context/PlayerContext";

function Progress() {
    const {
        progressVal,
        ref,
    } = usePlayerContext();
    return (
        <>
            <div className="flex items-center justify-between gap-2 grow">
                <span>00:00</span>
                <progress className="progress w-full rounded-full cursor-pointer" value={progressVal} max="100"></progress>
                <span>00:00</span>
            </div>
            <div className="flex items-center gap-2">
                <GrVolume />
                <progress className="progress w-[100px] rounded-full" value="50" max="100"></progress>
            </div>
        </>
    )
}

export default Progress