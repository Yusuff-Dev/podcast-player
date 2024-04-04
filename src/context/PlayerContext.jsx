import { createContext, useContext, useRef, useState } from "react";

const PlayerContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isPlay, setIsPlay] = useState(true);
    const [progressVal, setProgressVal] = useState(0);
    const [isRotate, setIsRotate] = useState(true);
    const [audioSrc, setAudioSrc] = useState('');
    const ref = useRef(null);

    // functions
    const PlayPause = () => {
        ref && (isPlay ? ref.current.play() : ref.current.pause())
        setIsPlay(!isPlay);
    };

    const updateTime = () => {
        if (ref) {
            const element = ref.current;
            setProgressVal((element.currentTime / element.duration) * 100);
            if (element.currentTime === element.duration) {
                setIsPlay(!isRotate);
                isRotate && element.play();
            }
        }
    }

    const rotate = (e) => {
        setIsRotate(!isRotate);
        isRotate ? e.target.style.color = 'red' : e.target.style.color = 'white'
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result.split(',')[1];
            setAudioSrc(`data:audio/mp3;base64,${base64}`);
        };

        reader.readAsDataURL(file);

        if (ref.current) {
            ref.current.currentTime = 0;
            reader.readAsDataURL(file);
        }
    };

    return (
        <PlayerContext.Provider value={{
            ref,
            isPlay,
            PlayPause,
            updateTime,
            progressVal,
            rotate,
            audioSrc,
            handleFileChange,
        }}>
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayerContext = () => {
    return useContext(PlayerContext);
}