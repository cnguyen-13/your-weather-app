import React, { useState, useEffect } from "react";
const { getMessage } = require("../../../HelperFunctions/getMessage");

interface Props {
    name: string,
    onChangeHandleName(e: any): void
}

function Welcome(props: Props) {
    const { name, onChangeHandleName } = props;
    const [message, setMessage] = useState<string>("");

    const styles = {
        border: 'none',
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: '30px',

    }

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
        <h2 className="intro-welcome">
            {message},{" "}
            <input
                style={styles}
                type="text"
                onChange={onChangeHandleName}
                value={name}
                placeholder={name === '' ? '[ Your Name ]' : ''}
            />
        </h2>
    );
}

export default Welcome;
