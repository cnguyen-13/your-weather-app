import React from "react";
//Components
import FCardDate from "./ForecastCardComponents/FCardDate";
import FCardDay from "./ForecastCardComponents/FCardDay";
import FCardIcon from "./ForecastCardComponents/FCardIcon";
import FCardDescription from "./ForecastCardComponents/FCardDescription";
import FCardTemps from "./ForecastCardComponents/FCardTemps";
//Helper Functions
const {
    getMinMaxTemps,
} = require("../../../../HelperFunctions/getMinMaxTemps");
const { getDateTimes } = require("../../../../HelperFunctions/getDateTimes");
const {
    getWeatherInfo,
} = require("../../../../HelperFunctions/getWeatherInfo");

interface Props {
    dayData: any;
    clickedOnCard: any;
    dayDataIdx: number;
    mSystem: string;
}

function ForecastCard(props: Props) {
    const { dayData, clickedOnCard, dayDataIdx, mSystem } = props;
    const temps = dayData.temp;
    const weather = dayData.weather[0];
    const time = dayData.dt;

    //Parse Data with Helper Functions
    const { minTemp, maxTemp } = getMinMaxTemps(temps, mSystem);
    const { weatherDescription, weatherIcon } = getWeatherInfo(weather);
    const { date, month, day } = getDateTimes(time);

    return (
        <div
            className={`card card-${dayDataIdx}`}
            onClick={clickedOnCard}
            id={dayDataIdx.toString()}
        >
            <FCardDate month={month} date={date} />
            <FCardDay day={day} />
            <FCardIcon
                weatherIcon={weatherIcon}
                weatherDescription={weatherDescription}
            />
            <FCardDescription weatherDescription={weatherDescription} />
            <FCardTemps minTemp={minTemp} maxTemp={maxTemp} />
        </div>
    );
}

export default ForecastCard;
