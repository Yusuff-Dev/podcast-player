import { RxTrackNext, RxTrackPrevious, RxPlay, RxPause, RxShuffle } from "react-icons/rx";
import { GrRotateRight, GrVolume, GrVolumeLow, GrVolumeMute } from "react-icons/gr";
import { usePlayerContext } from "./context/PlayerContext";
import audioFile from '../../../LEARN/Raad Al Kurdi/001.mp3'
import { useRef, useState } from "react";
function App() {
  const { isPlay, PlayPause, progressVal, updateTime, rotate } = usePlayerContext();
  const audiRef = useRef(null);

  const [audioSrc, setAudioSrc] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result.split(',')[1];
      setAudioSrc(`data:audio/mp3;base64,${base64}`);
    };

    reader.readAsDataURL(file); // Faylni o'qish
  };

  return (
    <>
      <div className="grid grid-cols-[minmax(200px,_300px)_minmax(300px,_1fr)] h-screen p-4 grid-rows-[auto_200px] gap-3">
        <div className="bg-[#1A1A1A] rounded-md shadow-lg p-3">
          <div className="flex items-center gap-2">
            <input onChange={handleFileChange} type="file" accept="audio/*" />
            <button className="bg-[#1A1A1A] shadow-lg border py-1 px-2">Add</button>
          </div>
          <ul className="mt-3">
            <li>list 1</li>
          </ul>
          {audioSrc && <audio ref={audiRef}
            onTimeUpdate={() => updateTime(audiRef)}
          >
            <source src={audioSrc} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>}
        </div>
        <div className="bg-[#1A1A1A] rounded-md shadow-lg">2</div>

        <div className="bg-[#1A1A1A] rounded-md shadow-lg col-span-2 p-3">
          <div className="grid md:grid-cols-[minmax(100px,_300px)_1fr] gap-4">
            <div className="flex items-center gap-2">
              <label className="form-control w-full max-w-[100px]">
                <input type="text" placeholder="Start" className="input w-full" />
              </label>
              <label className="form-control w-full max-w-[100px]">
                <input type="text" placeholder="End" className="input w-full" />
              </label>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span>00:00</span>
              <progress className="progress w-full rounded-full cursor-pointer" value={progressVal} max="100"></progress>
              <span>0000</span>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3 justify-center">
            <div className="flex items-center gap-2">
              <GrVolume />
              <progress className="progress w-[100px] rounded-full" value="50" max="100"></progress>
            </div>
            <div>Speed</div>
            <div className="flex items-center gap-3 mx-auto">
              <RxShuffle size={24} />
              <RxTrackPrevious size={24} />
              <button onClick={() => PlayPause(audiRef)}>
                {
                  isPlay ? <RxPlay className="bg-[#5C67DE] rounded-full p-2 cursor-pointer" size={50} />
                    : <RxPause className="bg-[#5C67DE] rounded-full p-2 cursor-pointer" size={50} />
                }
              </button>
              <RxTrackNext size={24} />
              <GrRotateRight size={24} onClick={rotate} />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
