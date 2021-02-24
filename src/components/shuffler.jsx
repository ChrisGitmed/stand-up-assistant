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

    const listItems = list.map((item, index) => {
        return <li>{item}</li>
    })
    
    return (
        <>
            <InputBox name={name} setName={handleChange} handlePostClick={handlePostClick}/>
            <div className='row'>
                <div className="list-box">
                    <ul>{listItems}</ul>
                </div>
            </div>
        </>
    )
}