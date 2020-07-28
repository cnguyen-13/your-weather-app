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

interface dataArrayObject {
    label: string;
    data: string;
}

function DateInfoColumn(props: Props) {
    const { cityData, title, units } = props;

    //Data sets
    const dataArr: dataArrayObject[] =
        title === "Temperatures"
            ? getAllTemps(cityData, units)
            : title === "Winds"
            ? getAllWind(cityData, units)
            : getAllWeather(cityData);

    return (
        <section className="date-info-section">
            <div className="date-info-text">
                <DateInfoTitle title={title} />
                <DateInfoGraphic title={title} />
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
