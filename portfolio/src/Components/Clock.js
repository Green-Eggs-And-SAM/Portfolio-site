import { useEffect, useState } from "react";

function Clock() {
    const [time, setTime] = useState();

    useEffect(() => {
        setInterval(() => {
            UpdateTime();
        }, 1000);
        UpdateTime();
    }, []);

    function UpdateTime() {
        const dateObject = new Date();
        const hour = dateObject.getHours();
        let minute = dateObject.getMinutes();
        if (parseInt(minute) < 10) minute = "0" + minute;
        const currentTime = hour + ":" + minute;
        setTime(currentTime);
    }

    return <div>{time}</div>;
}

export default Clock;
