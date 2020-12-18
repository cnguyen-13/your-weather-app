import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import MeasurementSystemContext from '../../../MeasurementSystemContext';
import ForecastCard from "./ForecastCard/ForecastCard";
import DayWeather from "../../DayWeather/DayWeather";
const { coordinatesUrl } = require("../../../HelperFunctions/coordinatesUrl");
const { forecastUrl } = require("../../../HelperFunctions/forecastUrl");

interface Coordinates {
    lat: number;
    lon: number;
}

function FCards() {
    const { cityParam } = useParams();
    const { measurementSystem } = useContext(MeasurementSystemContext);
    const [isInvalidCity, setIsInvalidCity] = useState<boolean>(false);
    const [wasCardClicked, setWasCardClicked] = useState<boolean>(false);
    const [dailyArr, setDailyArr] = useState<[]>([]);
    const [dailyIdx, setDailyIdx] = useState<number>(0);

    const clickedOnCard = (e: any): void => {
        let element = e.target;
        if (!element.id) {
            element = element.parentElement;
        }
        const idx = parseInt(element.id, 10);
        setDailyIdx(idx);
        setWasCardClicked(true);
    };

    useEffect(() => {
        const getCityData = async () => {
            //Reset cityData & invalidCity flag
            setIsInvalidCity(false);
            try {
                //Get Coordinates
                const coordUrl: string = coordinatesUrl(cityParam);
                const res = await axios.get(coordUrl);
                const data = res.data;
                const { lat, lon }: Coordinates = data.coord;

                //Get Large Data Set for City
                const fcastUrl: string = forecastUrl(lat, lon, measurementSystem);
                const forecastRes = await axios.get(fcastUrl);
                const forecastData = forecastRes.data;
                const forecastDailies: [] = forecastData.daily;
                setDailyArr(forecastDailies);
            } catch (err) {
                setIsInvalidCity(true);
            }
        };

        getCityData();
    }, [cityParam, measurementSystem]);

    if (isInvalidCity) {
        return null;
    }

    const forcaseCardComponents = dailyArr.map((day: any, idx: number) => {
        return (
            <ForecastCard
                clickedOnCard={clickedOnCard}
                data={day}
                dataIdx={idx}
                key={idx}
            />
        );
    })


    return (
        <>
            <div className="cards-switch-container">
                <div className="cards-container">
                    {forcaseCardComponents}
                </div>
            </div>
            {wasCardClicked ? (
                <DayWeather
                    city={cityParam}
                    dailyData={dailyArr[dailyIdx]}
                    mSystem={measurementSystem}
                />
            ) : null}
        </>
    );
}

export default FCards;
