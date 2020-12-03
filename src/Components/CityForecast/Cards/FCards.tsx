import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ForecastCard from "./ForecastCard/ForecastCard";
import DayWeather from "../../DayWeather/DayWeather";
import MSystemSwitch from "./MSystemSwitch/MSystemSwitch";
const { coordinatesUrl } = require("../../../HelperFunctions/coordinatesUrl");
const { forecastUrl } = require("../../../HelperFunctions/forecastUrl");

interface Coordinates {
    lat: number;
    lon: number;
}

function FCards() {
    const { cityParam } = useParams();
    const [mSystem, setMSystem] = useState<string>("imperial");
    const [isInvalidCity, setIsInvalidCity] = useState<boolean>(false);
    const [wasCardClicked, setWasCardClicked] = useState<boolean>(false);
    const [dailyArr, setDailyArr] = useState<[]>([]);
    const [dailyIdx, setDailyIdx] = useState<number>(0);

    const mSystemToggleFunc = (): void => {
        mSystem === "imperial" ? setMSystem("metric") : setMSystem("imperial");
    };

    const clickedOnCard = (e: any): void => {
        let element = e.target;
        if (!element.id) {
            element = element.parentElement;
        }
        const id = parseInt(element.id, 10);
        setDailyIdx(id);
        setWasCardClicked(true);
    };

    useEffect(() => {
        const getCityData = async () => {
            //Reset cityData & invalidCity flag
            setIsInvalidCity(false);
            try {
                //Get Coordinates
                const coordUrl: string = coordinatesUrl(cityParam);
                const coordRes = await fetch(coordUrl);
                const resData = await coordRes.json();
                const { lat, lon }: Coordinates = resData.coord;

                //Get Large Data Set for City
                const fcastUrl: string = forecastUrl(lat, lon, mSystem);
                const fcastRes = await fetch(fcastUrl);
                const fcastData = await fcastRes.json();
                const fcsatDailies: [] = fcastData.daily;
                setDailyArr(fcsatDailies);
            } catch (err) {
                setIsInvalidCity(true);
            }
        };

        getCityData();
    }, [cityParam, mSystem]);

    if (isInvalidCity) {
        return null;
    }
    return (
        <>
            <div className="cards-switch-container">
                <div className="cards-container">
                    {dailyArr.map((day: any, idx: number) => {
                        return (
                            <ForecastCard
                                clickedOnCard={clickedOnCard}
                                dayData={day}
                                dayDataIdx={idx}
                                key={idx}
                                mSystem={mSystem}
                            />
                        );
                    })}
                </div>
                <MSystemSwitch
                    mSystem={mSystem}
                    mSystemToggleFunc={mSystemToggleFunc}
                />
            </div>
            {wasCardClicked ? (
                <DayWeather
                    city={cityParam}
                    dailyData={dailyArr[dailyIdx]}
                    mSystem={mSystem}
                />
            ) : null}
        </>
    );
}

export default FCards;
