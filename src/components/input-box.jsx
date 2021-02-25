import React, { useState } from 'react';

export default function InputBox({ name, setName, handlePostClick, handleKeyDown, handleShuffleClick }) {

    return (
        <div className="input-box">
            <input type="text" value={name} onChange={setName} onKeyDown={handleKeyDown}/>
            <button className="green-button" onClick={handlePostClick}><span className="lnr lnr-plus-circle center"></span></button>
            <button className="shuffle-button" onClick={handleShuffleClick}>Shuffle</button>
        </div>
    )
}