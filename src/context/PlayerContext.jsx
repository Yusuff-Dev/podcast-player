import { createContext, useContext, useRef, useState } from "react";

const PlayerContext = createContext();

export const ContextProvider = ({ children }) => {
    const ref = useRef(null);
    const [isPlay, setIsPlay] = useState(true);
    const [progressVal, setProgressVal] = useState(0);
    const [audioSrc, setAudioSrc] = useState('');
    const [isRepeat, setIsRepeat] = useState(false);
    const [isMute, setIsMute] = useState(false);

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
        const podcast = ref.current;
        if (podcast) {
            if (isPlay) {
                podcast.play();
                podcast.currentTime = +limit.start || podcast.currentTime;
            } else {
                podcast.pause();
            }
        }
        setIsPlay(!isPlay);
    };

    const updateTime = () => {
        const podcast = ref.current;
        if (podcast) {
            setProgressVal((podcast.currentTime / podcast.duration) * 100);
            if (podcast.currentTime > +limit.end && +limit.end) {
                podcast.currentTime = +limit.start;
            }

            if (podcast.currentTime === podcast.duration) {
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
    }

    const repeat = () => {
        setIsRepeat(!isRepeat)
    }

    // progressbar
    const controlProgress = (e) => {
        const podcast = ref.current;
        const width = e.target.offsetWidth;
        const clickX = e.nativeEvent.offsetX;
        if (podcast) {
            podcast.currentTime = (clickX / width) * podcast.duration;
        }
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
            repeat,
            mute,
            isMute,
            controlProgress
        }}>
            {children}
        </PlayerContext.Provider>
    )
}

export const usePlayerContext = () => {
    return useContext(PlayerContext);
}