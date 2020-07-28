import React from "react";
import DateInfoTitle from "./DateInfoTitle";
import DateInfoGraphic from "./DateInfoGraphic";
const { getAllTemps } = require("../../../HelperFunctions/getAllTemps");
const { getAllWeather } = require("../../../HelperFunctions/getAllWeather");
const { getAllWind } = require("../../../HelperFunctions/getAllWind");

interface Props {
    cityData: any;
    title: string;
    units: string;
}

function DateInfoColumn(props: Props) {
    //Set up data and logo
    const { cityData, title, units } = props;
    //Image
    let href: string = `https://dryicons.com/free-icons/${title}-circle-icon`;
    let src: string = `${title}`;
    let alt: string = `${title} section`;

    //Data sets
    let dataArr: { label: string; data: string }[];
    if (title === "Temperatures") {
        dataArr = getAllTemps(cityData, units);
    } else if (title === "Weather") {
        dataArr = getAllWeather(cityData);
    } else {
        dataArr = getAllWind(cityData, units);
    }

    return (
        <section className="date-info-section">
            <div className="date-info-text">
                <DateInfoTitle title={title} />
                <DateInfoGraphic href={href} src={src} alt={alt} />
                {dataArr.map((pair) => {
                    const label = pair.label;
                    const data = pair.data;
                    return (
                        <>
                            <h4 className="date-info-label">{label}</h4>
                            <p className="date-info-data">{data}</p>
                        </>
                    );
                })}
            </div>
        </section>
    );
}

export default DateInfoColumn;
