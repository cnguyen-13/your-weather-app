import React, { useState, useEffect } from "react";
const { formatTime } = require("../../HelperFunctions/formatTime");
interface Props {}

function IntroTime(props: Props) {
    const {} = props;
    const [time, setTime] = useState<string>("");
    useEffect(() => {
        function updateTime(): void {
            const today = new Date();
            const hours = formatTime(today.getHours(), "hours");
            const minutes = formatTime(today.getMinutes(), "minutes");
            const seconds = formatTime(today.getSeconds(), "seconds");
            const amOrPm = today.getHours() < 12 ? "AM" : "PM";
            setTime(`${hours}:${minutes}:${seconds} ${amOrPm}`);
        }

        //First Time
        updateTime();

        //Interval
        const timeUpdateInterval = setInterval(() => {
            updateTime();
        }, 1000);

        //Unmount
        return () => clearInterval(timeUpdateInterval);
    }, []);

    return <h1 className="intro-time">{time}</h1>;
}

export default IntroTime;
