import React, { useState, useEffect } from "react";
import Time from "./IntroComponents/Time";
import Welcome from "./IntroComponents/Welcome";
import Question from "./IntroComponents/Question";
import GetWeatherButton from "./IntroComponents/GetWeatherButton";
import { getBackgroundClass } from "../../HelperFunctions/getBackgroundClass";
interface Props {
    city: string | null;
    setLocalCity: any;
}

function Intro(props: Props) {
    const { city, setLocalCity } = props;
    const [backgroundClass, setBackgroundClass] = useState<string>("");
    const [slideClass, setSlideClass] = useState<string>("");
    const slideFunc = (): void => {
        setSlideClass("slide-away");
    };

    useEffect(() => {
        //Get Background
        const updateBackground = async () => {
            const today = new Date();
            const hours = today.getHours();
            const bgClass = getBackgroundClass(hours);
            setBackgroundClass(bgClass);
        };

        updateBackground();

        //Interval
        const timeUpdateInterval = setInterval(() => {
            updateBackground();
        }, 3600000);

        //Unmount
        return () => clearInterval(timeUpdateInterval);
    }, []);

    return (
        <div id="intro" className={`intro ${backgroundClass} ${slideClass}`}>
            <Time />
            <Welcome />
            <Question city={city} setLocalCity={setLocalCity} />
            <GetWeatherButton city={city} slideFunc={slideFunc} />
        </div>
    );
}

export default Intro;
