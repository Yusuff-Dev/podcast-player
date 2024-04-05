import { RxPlay, RxPause } from "react-icons/rx";
import { usePlayerContext } from "../context/PlayerContext";
import Progress from "./Progress";
import Repeat from './Repeat'
import Audio from "./Audio";

function Controllers() {
    const {
        isPlay,
        PlayPause,
        audioSrc,
        limit,
        handleInputChange,
    } = usePlayerContext();

    return (
        <>
            <div className="flex items-center gap-6">
                <Progress />
                <Repeat />
            </div>

            <div className="mt-5 flex items-center gap-3 justify-center flex-wrap">
                <Audio />
                <div className="flex items-center gap-3">
                    <label className="form-control w-full max-w-[100px]">
                        <input value={limit.start}
                            onChange={handleInputChange}
                            id="start"
                            type="number" placeholder="Start" className="input w-full" />
                    </label>
                    <button onClick={PlayPause} disabled={!audioSrc} className="disabled:opacity-50 cursor-pointer">
                        {
                            isPlay ? <RxPlay className="bg-[#5C67DE] rounded-full p-2" size={50} />
                                : <RxPause className="bg-[#5C67DE] rounded-full p-2" size={50} />
                        }
                    </button>
                    <label className="form-control w-full max-w-[100px]">
                        <input value={limit.end}
                            onChange={handleInputChange}
                            id="end"
                            type="number" placeholder="End" className="input w-full" />
                    </label>
                </div>
            </div>
        </>
    )
}

export default Controllers