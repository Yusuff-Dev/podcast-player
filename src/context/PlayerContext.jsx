import { createContext, useContext, useRef, useState } from "react";

const PlayerContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isPlay, setIsPlay] = useState(true);
    const [progressVal, setProgressVal] = useState(0);
    const [audioSrc, setAudioSrc] = useState('');
    const [isRepeat, setIsRepeat] = useState(false);
    const [isMute, setIsMute] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const ref = useRef(null);

    const [limit, setLimit] = useState({
        start: '',
        end: ''
    });

    const handleInputChange = (e) => {
        setLimit((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value
        }));
    }

    // functions
    const PlayPause = () => {
        if (ref.current) {
            if (isPlay) {
                ref.current.play();
                ref.current.currentTime = +limit.start || 0;
            } else {
                ref.current.pause();
            }
        }
        setIsPlay(!isPlay);
    };

    const updateTime = () => {
        if (ref.current) {
            const element = ref.current;
            setProgressVal((element.currentTime / element.duration) * 100);
            if (element.currentTime > +limit.end && +limit.end) {
                element.currentTime = +limit.start;
            }

            if (element.currentTime === element.duration) {
                setIsPlay(true)
            }
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result.split(',')[1];
            setAudioSrc(`data:audio/mp3;base64,${base64}`);
        };

        reader.readAsDataURL(file);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const mute = () => {
        setIsMute(!isMute);
        if (ref.current) {
            isMute ? ref.current.volume = 1 : ref.current.volume = 0;
        }
    }

    const controlVol = (e) => {
        console.log(e.offsetWidth);
    }

    return (
        <PlayerContext.Provider value={{
            ref,
            isPlay,
            PlayPause,
            updateTime,
            progressVal,
            audioSrc,
            handleFileChange,
            limit,
            handleInputChange,
            formatTime,
            isRepeat,
            setIsRepeat,
            mute,
            isMute,
            volume,
            controlVol,
        }}>
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayerContext = () => {
    return useContext(PlayerContext);
}