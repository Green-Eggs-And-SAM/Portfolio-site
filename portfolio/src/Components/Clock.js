import { useEffect, useState } from "react";

function Clock() {
    const [time, setTime] = useState();
    useEffect(() => {
        setInterval(() => {
            const dateObject = new Date();

            const hour = dateObject.getHours();
            const minute = dateObject.getMinutes();

            const currentTime = hour + ":" + minute;

            setTime(currentTime);
        }, 60000);
    }, []);

    return <div>{time}</div>;
}

export default Clock;
