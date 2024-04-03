import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isPlay, setIsPlay] = useState(true);
    const [progressVal, setProgressVal] = useState(0);
    const [isRotate, setIsRotate] = useState(true);

    // functions
    const PlayPause = (item) => {
        if (item && isPlay) {
            item.current.play();
            setIsPlay(false);

        } else {
            item.current.pause();
            setIsPlay(true);
        }
    };

    const updateTime = (item) => {
        if (item) {
            const element = item.current;
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

    return (
        <PlayerContext.Provider value={{
            isPlay,
            PlayPause,
            updateTime,
            progressVal,
            rotate
        }}>
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayerContext = () => {
    return useContext(PlayerContext);
}