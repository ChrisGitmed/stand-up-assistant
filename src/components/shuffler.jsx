import React, { useState } from 'react';
import InputBox from './input-box';

export default function Shuffler() {
    const [name, setName] = useState('');
    const [list] = useState([]);

    function handleChange(event) {
        setName(event.target.value)
    }

    function handlePostClick(event) {
        list.push(name);
        setName('');
    }

    return (
        <InputBox name={name} setName={handleChange} handlePostClick={handlePostClick}/>
    )
}