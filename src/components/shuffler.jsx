import React from 'react';

export default function Shuffler() {

    function InputBox() {
        return (
            <div>
                <input type="text" placeholder="Enter name"/>
                <button>+</button>
            </div>
        )
    }

    return (
        <InputBox />
    )
}