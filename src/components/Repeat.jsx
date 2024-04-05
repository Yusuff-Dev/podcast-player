import React from 'react'
import { BsRepeat, BsRepeat1 } from "react-icons/bs";
import { usePlayerContext } from '../context/PlayerContext'

function Repeat() {
  const { isRepeat, repeat } = usePlayerContext();
  return (
    <button onClick={repeat}>
      {isRepeat ? <BsRepeat1 size={26} /> : <BsRepeat size={26} />}
    </button>
  )
}

export default Repeat