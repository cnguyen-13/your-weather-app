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

    const onChangeHandleName = (e: any): void => {
        const { value } = e.target;
        localStorage.setItem("name", value);
        setName(value);
    }

    const onChangeHandleCity = (e: any): void => {
        const { value } = e.target;
        localStorage.setItem("city", value);
        setCity(value);
    }

    useEffect(() => {
        //Get Background
        const updateBackground = () => {
            const today = new Date();
            const hours = today.getHours();
            const bgClass = getBackgroundClass(hours);
            setBackgroundClass(bgClass);
        };

        updateBackground();

        //Interval
        const timeUpdateInterval: NodeJS.Timeout = setInterval(() => {
            updateBackground();
        }, 3600000);

        //Unmount
        return (): void => clearInterval(timeUpdateInterval);
    }, []);

    return (
        <div id="intro" className={`intro ${backgroundClass}`}>
            <Logo />
            <Time />
            <Welcome name={name} onChangeHandleName={onChangeHandleName} />
            <Question city={city} onChangeHandleCity={onChangeHandleCity} />
            <GetWeatherButton city={city} />
        </div>
    );
}

export default Intro;
