import React, {useState, useEffect} from "react";


function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() =>{
            setTime(new Date());
        }, 1000); // Update the time every second

        return () => {
            clearInterval(intervalId); // Cleanup the interval on component unmount
        }
    }, [])

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? 'pm' : 'am';

        hours = hours % 12 || 12; // Convert to 12-hour format

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(num) {
        return (num < 10 ? "0" : "") + num; // Add leading zero if needed
    }

    return (<>
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>

            </div>

        </div>
    
    
    </>);
}

export default DigitalClock;