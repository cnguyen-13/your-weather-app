import React, { useState, useEffect } from "react";
import IntroTime from "./IntroTime";
import IntroWelcome from "./IntroWelcome";
import IntroQuestion from "./IntroQuestion";
import IntroButton from "./IntroButton";

interface Props {}

function Intro(props: Props) {
    const [city, setCity] = useState<string | null>(null);
    const [backgroundClass, setBackgroundClass] = useState<string>("");

    //Local Storage CITY
    function setLocalCity(e: React.FormEvent) {
        console.log("hello");
    }

    useEffect(() => {
        //Local Storage setup

        function getLocalCity() {
            if (localStorage.getItem("city")) {
                setCity(localStorage.getItem("city"));
            } else {
                setCity("[ Your City ]");
            }
        }

        getLocalCity();
    }, []);

    //Background
    useEffect(() => {
        function updateBackground(): void {
            const today = new Date();
            const hours = today.getHours();
            if (hours >= 0 && hours <= 11) {
                setBackgroundClass("morning");
            } else if (hours >= 12 && hours <= 18) {
                setBackgroundClass("afternoon");
            } else {
                setBackgroundClass("evening");
            }
        }

        //First Time
        updateBackground();

        //Interval
        const timeUpdateInterval = setInterval(() => {
            updateBackground();
        }, 3600000);

        //Unmount
        return () => clearInterval(timeUpdateInterval);
    }, []);

    return (
        <div id="intro" className={`intro ${backgroundClass}`}>
            <IntroTime />
            <IntroWelcome />
            <IntroQuestion city={city} setLocalCity={setLocalCity} />
            <IntroButton />
        </div>
    );
}

export default Intro;
