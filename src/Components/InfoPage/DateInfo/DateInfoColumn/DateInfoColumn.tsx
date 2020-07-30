import React from "react";
import DateInfoTitle from "./DateInfoTitle";
import DateInfoGraphic from "./DateInfoGraphic";
const { getAllTemps } = require("../../../HelperFunctions/getAllTemps");
const { getAllWeather } = require("../../../HelperFunctions/getAllWeather");
const { getAllWind } = require("../../../HelperFunctions/getAllWind");

interface Props {
    cityData: any;
    title: string;
    mSystem: string;
}

interface dataArrayObject {
    label: string;
    data: string;
}

function DateInfoColumn(props: Props) {
    const { cityData, title, mSystem } = props;

    //Obtain correct Data set
    const dataArr: dataArrayObject[] =
        title === "Temperatures"
            ? getAllTemps(cityData, mSystem)
            : title === "Winds"
            ? getAllWind(cityData, mSystem)
            : getAllWeather(cityData);

    return (
        <section className="date-info-section">
            <div className="date-info-text">
                <DateInfoTitle title={title} />
                <DateInfoGraphic title={title} />
                {dataArr.map((pair) => {
                    return (
                        <div key={pair.label}>
                            <h4 className="date-info-label">{pair.label}</h4>
                            <p className="date-info-data">{pair.data}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default DateInfoColumn;
