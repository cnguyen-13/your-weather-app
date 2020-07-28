import React, { useState, useEffect } from "react";
const { getFormattedTime } = require("../../HelperFunctions/getFormattedTime");

function IntroTime() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = (): void => {
            const formattedTime: string = getFormattedTime();
            setTime(formattedTime);
        };

        //First Tick
        updateTime();

        //Interval
        const updateTimeInterval: NodeJS.Timeout = setInterval(() => {
            updateTime();
        }, 1000);

        //Unmount
        return (): void => clearInterval(updateTimeInterval);
    }, []);

    return <h1 className="intro-time">{time}</h1>;
}

export default IntroTime;
