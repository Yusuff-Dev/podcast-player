import React from 'react'

function InputUI({place}) {
    return (
        <>
            <label className="form-control w-full max-w-[100px]">
                <input type="text" placeholder="Start" className="input w-full" />
            </label>
        </>
    )
}

export default InputUI