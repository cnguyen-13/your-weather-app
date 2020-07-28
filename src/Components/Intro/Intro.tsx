import React, { useState, useEffect } from "react";
import IntroTime from "./IntroTime";
import IntroWelcome from "./IntroWelcome";
import IntroQuestion from "./IntroQuestion";
import IntroButton from "./IntroButton";
interface Props {
    city: string | null;
    setLocalCity: any;
}

function Intro(props: Props) {
    const { city, setLocalCity } = props;
    const [backgroundClass, setBackgroundClass] = useState<string>("");
    const [slideClass, setSlideClass] = useState<string>("");
    //Background
    useEffect(() => {
        const updateBackground = async () => {
            const today = new Date();
            const hours = today.getHours();
            if (hours >= 0 && hours <= 11) {
                setBackgroundClass("morning");
            } else if (hours >= 12 && hours <= 18) {
                setBackgroundClass("afternoon");
            } else {
                setBackgroundClass("evening");
            }
        };

        updateBackground();

        //Interval
        const timeUpdateInterval = setInterval(() => {
            updateBackground();
        }, 3600000);

        //Unmount
        return () => clearInterval(timeUpdateInterval);
    }, []);

    function slideFunc() {
        setSlideClass("slide-away");
    }
    return (
        <div id="intro" className={`intro ${backgroundClass} ${slideClass}`}>
            <IntroTime />
            <IntroWelcome />
            <IntroQuestion city={city} setLocalCity={setLocalCity} />
            <IntroButton city={city} slideFunc={slideFunc} />
        </div>
    );
}

export default Intro;
