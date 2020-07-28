import React from "react";
import Temperatures from "../../../images/misc/temps.svg";
import Weather from "../../../images/misc/weather.svg";
import Winds from "../../../images/misc/winds.svg";

interface Props {
    href: string;
    src: string;
    alt: string;
}

function DateInfoGraphic(props: Props) {
    const { href, src, alt } = props;
    let graphic;
    if (src === "Temperatures") {
        graphic = Temperatures;
    } else if (src === "Weather") {
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

export default DateInfoGraphic;
