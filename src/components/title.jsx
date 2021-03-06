import React from 'react';

export default function Title() {

    function getDayInString(dayInNum) {
        switch(dayInNum) {
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

    function getMonthInString(monthInNum) {
        switch(monthInNum) {
            case 0:
                return 'Jan';
            case 1:
                return 'Feb';
            case 2:
                return 'Mar';
            case 3:
                return 'Apr';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'Aug';
            case 8:
                return 'Sep';
            case 9:
                return 'Oct';
            case 10:
                return 'Nov';
            case 11:
                return 'Dec';
        }
    }
    const date = new Date();
    const day = getDayInString(date.getDay());
    const month = getMonthInString(date.getMonth());
    const today = `${day}, ${month} ${date.getDate()}`
    return (
        <nav className="row title space-around align-center">
            <h1>LFZ Stand-up</h1>
            <h4>{today}</h4>
        </nav>
    )
}