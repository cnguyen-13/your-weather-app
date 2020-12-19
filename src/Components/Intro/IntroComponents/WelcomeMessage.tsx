import React, { useState, useEffect } from 'react';
const { getMessage } = require("../../../HelperFunctions/getMessage");

function WelcomeMessage() {
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        const updateMessage = (): void => {
            const message: string = getMessage();
            setMessage(message);
        };

        //First Moment
        updateMessage();

        //Interval
        const updateMessageInterval: NodeJS.Timeout = setInterval(() => {
            updateMessage();
        }, 3600000);

        //Unmount
        return (): void => clearInterval(updateMessageInterval);
    }, []);
    return (
        <>
            {message},{" "}
        </>
    )
}

export default WelcomeMessage;