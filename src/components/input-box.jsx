import React, { useState } from 'react';

export default function InputBox({ name, setName, handlePostClick, handleKeyDown, handleShuffleClick }) {

    return (
        <div className="input-box">
            <input type="text" value={name} onChange={setName} onKeyDown={handleKeyDown}/>
            <button onClick={handlePostClick}>+</button>
            <button onClick={handleShuffleClick}>Shuffle</button>
        </div>
    )
}