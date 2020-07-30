import React from "react";
//Components
import CardDate from "./CardDate";
import CardDay from "./CardDay";
import CardIcon from "./CardIcon";
import CardDescription from "./CardDescription";
import CardTemps from "./CardTemps";
//Helper Functions
const { getMinMaxTemps } = require("../../../HelperFunctions/getMinMaxTemps");
const { getDateTimes } = require("../../../HelperFunctions/getDateTimes");
const { getWeatherInfo } = require("../../../HelperFunctions/getWeatherInfo");

interface Props {
    data: any;
    clickedOnCard: any;
    dataIdx: number;
    mSystem: string;
}

function Card(props: Props) {
    const { data, clickedOnCard, dataIdx, mSystem } = props;
    const temps = data.temp;
    const weather = data.weather[0];
    const time = data.dt;

    //Parse Data with Helper Functions
    const { minTemp, maxTemp } = getMinMaxTemps(temps, mSystem);
    const { weatherDescription, weatherIcon } = getWeatherInfo(weather);
    const { date, month, day } = getDateTimes(time);

    return (
        <div className="card" onClick={clickedOnCard} id={dataIdx.toString()}>
            <CardDate month={month} date={date} />
            <CardDay day={day} />
            <CardIcon
                weatherIcon={weatherIcon}
                weatherDescription={weatherDescription}
            />
            <CardDescription weatherDescription={weatherDescription} />
            <CardTemps minTemp={minTemp} maxTemp={maxTemp} />
        </div>
    );
}

export default Card;
