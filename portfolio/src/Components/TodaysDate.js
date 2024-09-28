import { useEffect, useState } from "react";

function TodaysDate() {
    const [thisDate, setDate] = useState();

    useEffect(() => {
        UpdateDate();
    }, []);

    function UpdateDate() {
        const dateObject = new Date();
        const day = dateObject.getDay();
        const date = dateObject.getDate();
        const month = dateObject.getMonth();

        const currentDate = day + "/" + date + "/" + month;
        console.log(currentDate);
        setDate(currentDate);
    }

    return <div>{thisDate}</div>;
}

export default TodaysDate;
