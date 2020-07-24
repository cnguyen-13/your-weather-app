import React, { useState, useEffect } from "react";
const messages: { morning: string; afternoon: string; evening: string } = {
    morning: "Good Morning",
    afternoon: "Good Afternoon",
    evening: "Good Evening",
};
interface Props {}

function IntroWelcome(props: Props) {
    const {} = props;
    const [name, setName] = useState<string | null>(null);
    const [message, setMessage] = useState<string>("");
    function setLocalName(e: any) {
        const span = e.target;
    }

    useEffect(() => {
        function updateMessage(): void {
            const today = new Date();
            const hours = today.getHours();
            if (hours >= 0 && hours <= 11) {
                setMessage(messages.morning);
            } else if (hours >= 12 && hours <= 18) {
                setMessage(messages.afternoon);
            } else {
                setMessage(messages.evening);
            }
        }

        updateMessage();
    }, []);

    useEffect(() => {
        //Local Storage setup
        function getLocalName() {
            if (localStorage.getItem("name")) {
                setName(localStorage.getItem("name"));
            } else {
                setName("[ Your Name ]");
            }
        }

        getLocalName();
    }, []);

    return (
        <h2 className="intro-welcome">
            {message},{" "}
            <span contentEditable="true" onInput={setLocalName}>
                {name}
            </span>
        </h2>
    );
}

export default IntroWelcome;
