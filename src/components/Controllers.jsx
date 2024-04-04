import { RxPlay, RxPause } from "react-icons/rx";
import { GrRotateRight, GrVolume, GrVolumeLow, GrVolumeMute } from "react-icons/gr";
import { usePlayerContext } from "../context/PlayerContext";
import Progress from "./Progress";

function Controllers({ audioRef }) {
    const {
        isPlay,
        rotate,
        PlayPause,
        audioSrc,
        ref,
    } = usePlayerContext();

    return (
        <>
            <div className="flex items-center gap-6">
                <Progress />
            </div>

            <div className="mt-3 flex items-center gap-3 justify-center">
                <div className="flex items-center gap-3 mx-auto">
                    <label className="form-control w-full max-w-[100px]">
                        <input type="text" placeholder="Start" className="input w-full" />
                    </label>
                    <button onClick={() => PlayPause(audioRef)} disabled={!audioSrc} className="disabled:opacity-50">
                        {
                            isPlay ? <RxPlay className="bg-[#5C67DE] rounded-full p-2 cursor-pointer" size={50} />
                                : <RxPause className="bg-[#5C67DE] rounded-full p-2 cursor-pointer" size={50} />
                        }
                    </button>
                    <label className="form-control w-full max-w-[100px]">
                        <input type="text" placeholder="End" className="input w-full" />
                    </label>
                    <GrRotateRight size={24} onClick={rotate} />
                </div>
            </div>
        </>
    )
}

export default Controllers