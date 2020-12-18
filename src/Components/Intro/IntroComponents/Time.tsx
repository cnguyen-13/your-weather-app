import React, { useState, useEffect } from "react";
const {
    getFormattedTime,
} = require("../../../HelperFunctions/getFormattedTime");

function Time() {
    const [formattedTime, setFormattedTime] = useState<string>("");

    useEffect(() => {
        const updateTime = (): void => {
            const formattedTime: string = getFormattedTime();
            setFormattedTime(formattedTime);
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

    return <h1 className="intro-time">{formattedTime}</h1>;
}

export default Time;
