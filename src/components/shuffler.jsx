import React, { useState } from 'react';
import InputBox from './input-box';

export default function Shuffler() {
    const [name, setName] = useState('');
    const [list] = useState([]);
    const [shuffledList, setShuffledList] = useState([]);
    const [isShuffled, setIsShuffled] = useState(false);

    function handleChange(event) {
        setName(event.target.value)
    }

    function handlePostClick(event) {
        list.push(name);
        setName('');
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            if (isShuffled) {
                list.push(name);
                shuffledList.push(name);
                setName('');
            } else {
                list.push(name);
                setName('');
            }
        }
    }

    function handleShuffleClick(event) {
        setIsShuffled(false);
        setShuffledList(shuffle(list));
        setIsShuffled(true);
    }

    function shuffle(array) {
        const tempArray = [];
        for (let i = 0; i < array.length; i++) {
            tempArray.push(array[i]);
        }

        let currentIndex = tempArray.length, temporaryValue, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = tempArray[currentIndex];
            tempArray[currentIndex] = tempArray[randomIndex];
            tempArray[randomIndex] = temporaryValue;
        }
        return tempArray;
    }

    const listItems = list.map((item, index) => {
        return <li key={index}>{item}</li>
    })

    const shuffledListItems = shuffledList.map((item, index) => {
        return <li key={index}>{item}</li>
    })

    return (
        <>  
            <InputBox name={name} setName={handleChange} handlePostClick={handlePostClick} handleKeyDown={handleKeyDown} handleShuffleClick={handleShuffleClick}/>
            <div className="row justify-space-around">
                <div className="list-box">
                    <ul>{listItems}</ul>
                </div>
                <div className="shuffled-list-box">
                    <ul>{shuffledListItems}</ul>
                </div>
            </div>
        </>
    )
}