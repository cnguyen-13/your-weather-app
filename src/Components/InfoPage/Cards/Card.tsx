import React from "react";
import CardDate from "./CardDate";
import CardDay from "./CardDay";
import CardIcon from "./CardIcon";
import CardDescription from "./CardDescription";
import CardTemps from "./CardTemps";
const { getMinMaxTemps } = require("../../../HelperFunctions/getMinMaxTemps");
const { getDateTimes } = require("../../../HelperFunctions/getDateTimes");
const {
    getWeatherDetails,
} = require("../../../HelperFunctions/getWeatherDetails");

interface Props {
    data: any;
    clickedOnCard: any;
    dataIdx: number;
    units: string;
}

function Card(props: Props) {
    const { data, clickedOnCard, dataIdx, units } = props;
    const temps = data.temp;
    const weather = data.weather[0];
    const time = data.dt;

    //Parse Data
    const { minTemp, maxTemp } = getMinMaxTemps(temps);
    const { weatherDescription, weatherIcon } = getWeatherDetails(weather);
    const { date, month, day } = getDateTimes(time);

    return (
        <div className="card" onClick={clickedOnCard} id={dataIdx.toString()}>
            <CardDate month={month} date={date} />
            <CardDay day={day} />
            <CardIcon weatherIcon={weatherIcon} />
            <CardDescription weatherDescription={weatherDescription} />
            <CardTemps minTemp={minTemp} maxTemp={maxTemp} units={units} />
        </div>
    );
}

export default Card;
