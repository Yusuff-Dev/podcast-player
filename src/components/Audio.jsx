import { usePlayerContext } from "../context/PlayerContext"

function Audio() {
    const { ref, audioSrc, handleFileChange, updateTime, isRepeat, isMute } = usePlayerContext();
    return (
        <>
            <input onChange={handleFileChange} type="file" accept="audio/*" />

            {audioSrc && <audio ref={ref}
                onTimeUpdate={updateTime}
                loop={isRepeat}
                muted={isMute}
            >
                <source src={audioSrc} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>}
        </>
    )
}

export default Audio