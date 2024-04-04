import React from 'react'
import { usePlayerContext } from '../context/PlayerContext'

function Repeat() {
  const { isRepeat, setIsRepeat } = usePlayerContext();
  return (
    <div onClick={() => setIsRepeat(!isRepeat)} className="px-3 text-lg cursor-pointer select-none">
      Repeat {isRepeat ? '-1' : ''}
    </div>
  )
}

export default Repeat