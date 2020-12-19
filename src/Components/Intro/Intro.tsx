import React, { useState, useEffect } from "react";
import Logo from './IntroComponents/Logo';
import Time from "./IntroComponents/Time";
import Welcome from "./IntroComponents/Welcome";
import Question from "./IntroComponents/Question";
import GetWeatherButton from "./IntroComponents/GetWeatherButton";
import { getBackgroundClass } from "../../HelperFunctions/getBackgroundClass";

function Intro() {
    const [name, setName] = useState<string>(localStorage.getItem("name") || "")
    const [city, setCity] = useState<string>(localStorage.getItem("city") || "")
    const [backgroundClass, setBackgroundClass] = useState<string>("");

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { id, value } = e.target;
        if (id === 'name') {
            localStorage.setItem("name", value);
            setName(value);
        } else {
            localStorage.setItem("city", value);
            setCity(value);
        }
    }

    useEffect(() => {
        //Get Background
        const updateBackground = (): void => {
            const today: Date = new Date();
            const hours: number = today.getHours();
            const bgClass: string = getBackgroundClass(hours);
            setBackgroundClass(bgClass);
        };

        updateBackground();

        //Interval
        const timeUpdateInterval: NodeJS.Timeout = setInterval((): void => {
            updateBackground();
        }, 3600000);

        //Unmount
        return (): void => clearInterval(timeUpdateInterval);
    }, []);

    return (
        <div id="intro" className={`intro ${backgroundClass}`}>
            <Logo />
            <Time />
            <Welcome topic="name" name={name} onChangeHandler={onChangeHandler} />
            <Question topic="city" city={city} onChangeHandler={onChangeHandler} />
            <GetWeatherButton city={city} />
        </div>
    );
}

export default Intro;
