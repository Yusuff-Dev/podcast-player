import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isPlay, setIsPlay] = useState(true);

    // functions
    const PlayPause = () => setIsPlay(!isPlay);
    return (
        <PlayerContext.Provider value={{
            isPlay,
            PlayPause,
        }}>
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayerContext = () => {
    return useContext(PlayerContext);
}