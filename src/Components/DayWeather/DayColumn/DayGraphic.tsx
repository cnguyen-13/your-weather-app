import React from "react";
import Temperatures from "../../../images/misc/temps.svg";
import Weather from "../../../images/misc/weather.svg";
import Winds from "../../../images/misc/winds.svg";

interface Props {
    title: string;
}

function DayGraphic(props: Props) {
    const { title } = props;
    const href: string = `https://dryicons.com/free-icons/${title}-circle-icon`;
    const alt: string = `${title} section`;

    //Graphic picture
    let graphic: string = "";
    if (title === "Temperatures") {
        graphic = Temperatures;
    } else if (title === "Weather") {
        graphic = Weather;
    } else {
        graphic = Winds;
    }

    return (
        <div className="date-graphic">
            <a href={href}>
                <img className="date-info-img" src={graphic} alt={alt} />
            </a>
        </div>
    );
}

export default DayGraphic;
