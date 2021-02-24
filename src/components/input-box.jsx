import React, { useState } from 'react';

export default function InputBox({ name, setName, handlePostClick, handleKeyDown }) {

    return (
        <div className="input-box">
            <input type="text" value={name} onChange={setName} onKeyDown={handleKeyDown}/>
            <button onClick={handlePostClick}>+</button>
        </div>
    )
}