import React, { useState } from 'react';

export default function InputBox({ name, setName, handlePostClick }) {

    return (
        <div>
            <input type="text" value={name} onChange={setName} />
            <button onClick={handlePostClick}>+</button>
        </div>
    )
}