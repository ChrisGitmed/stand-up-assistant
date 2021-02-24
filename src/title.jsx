import React from 'react';

export default function Title() {

    function getDayInString(dayInNum) {
        switch (dayInNum) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2: 
                return 'Tuesday';
            case 3: 
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6: 
                return 'Saturday';
        }
    }

    const date = new Date();
    const day = getDayInString(date.getDay());
    
    const today = `${day}, ${date.getMonth()} ${date.getDate()}`
    return (
        <div>
            <h1 className="title">Stand-Up! {today}</h1>
        </div>
    )
}