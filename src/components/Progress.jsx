import { usePlayerContext } from "../context/PlayerContext";
import Volume from "./Volume";

function Progress() {
    const {
        progressVal,
        ref,
        formatTime,
    } = usePlayerContext();



    return (
        <>
            <div className="flex items-center justify-between gap-2 grow">
                <span>
                    {
                        ref.current && formatTime(ref.current.currentTime) || '00:00'
                    }
                </span>
                <progress className="progress w-full rounded-full cursor-pointer" value={progressVal} max="100"></progress>
                <span>
                    {
                        ref.current && formatTime(ref.current.duration) || '00:00'
                    }
                </span>
            </div>
            <div className="flex items-center gap-2">
                <Volume/>
            </div>
        </>
    )
}

export default Progress