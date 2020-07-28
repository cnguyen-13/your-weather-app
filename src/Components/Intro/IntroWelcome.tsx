import React, { useState, useEffect } from "react";
const { getMessage } = require("../../HelperFunctions/getMessage");

function IntroWelcome() {
    const name: string = localStorage.getItem("name") || "[ Your Name ]";
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

    const setLocalName = (e: any): void => {
        const span = e.target;
        localStorage.setItem("name", span.textContent);
    };

    const clearField = (e: any): void => {
        if (e.target.textContent === "[ Your Name ]") {
            e.target.textContent = "";
        }
    };

    return (
        <h2 className="intro-welcome">
            {message},{" "}
            <span
                contentEditable="true"
                onInput={setLocalName}
                onClick={clearField}
            >
                {name}
            </span>
        </h2>
    );
}

export default IntroWelcome;
