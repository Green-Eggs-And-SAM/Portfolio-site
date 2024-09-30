import { useEffect, useState } from "react";

function TodaysDate() {
    const [thisDate, setDate] = useState();

    useEffect(() => {
        UpdateDate();
    }, []);

    function UpdateDate() {
        const dateObject = new Date();
        const day = GetDayName(dateObject.getDay());

        const date = dateObject.getDate();
        const month = GetMonthName(dateObject.getMonth());

        const currentDate = day + " " + month + " " + date + "   ";
        console.log(currentDate);
        setDate(currentDate);
    }

    function GetDayName(day) {
        switch (day) {
            case 1:
                return "Mon";

            case 2:
                return "Tue";

            case 3:
                return "Wed";

            case 4:
                return "Thu";

            case 5:
                return "Fri";

            case 6:
                return "Sat";

            default:
                return "Sun";
        }
    }

    function GetMonthName(month) {
        switch (month) {
            case 0:
                return "Jan";

            case 1:
                return "Feb";

            case 2:
                return "Mar";

            case 3:
                return "Apr";

            case 4:
                return "May";

            case 5:
                return "Jun";

            case 6:
                return "July";

            case 7:
                return "Aug";

            case 8:
                return "Sep";

            case 9:
                return "Oct";

            case 10:
                return "Nov";

            case 11:
                return "Dec";
        }
    }

    return <div>{thisDate}</div>;
}

export default TodaysDate;
