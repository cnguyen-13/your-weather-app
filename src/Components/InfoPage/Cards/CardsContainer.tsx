import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//Components
import Card from "./Card/Card";
import DateInfo from "../DateInfo/DateInfo";
import UnitSwitch from "./measurementSwitch/UnitSwitch";
//Helper Functions
const { coordinatesUrl } = require("../../../HelperFunctions/coordinatesUrl");
const { forecastUrl } = require("../../../HelperFunctions/forecastUrl");

interface Coordinates {
    lat: number;
    lon: number;
}

function CardsContainer() {
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
                const url: string = coordinatesUrl(cityParam);
                const res = await fetch(url);
                const data = await res.json();
                const { lat, lon }: Coordinates = data.coord;

                //Get Large Data Set for City
                const oneCallUrl: string = forecastUrl(lat, lon, mSystem);
                const res2 = await fetch(oneCallUrl);
                const oneCallData = await res2.json();
                const oneCallDataDailyArr = oneCallData.daily;
                setDailyArr(oneCallDataDailyArr);
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
                            <Card
                                clickedOnCard={clickedOnCard}
                                data={day}
                                dataIdx={idx}
                                key={idx}
                                mSystem={mSystem}
                            />
                        );
                    })}
                </div>
                <UnitSwitch
                    mSystem={mSystem}
                    mSystemToggleFunc={mSystemToggleFunc}
                />
            </div>
            {wasCardClicked ? (
                <DateInfo
                    city={cityParam}
                    dailyData={dailyArr[dailyIdx]}
                    mSystem={mSystem}
                />
            ) : null}
        </>
    );
}

export default CardsContainer;
