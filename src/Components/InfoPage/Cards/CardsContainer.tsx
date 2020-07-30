import React, { useState, useEffect } from "react";
import Card from "./Card";
import DateInfo from "../DateInfo/DateInfo";
import UnitSwitch from "./UnitSwitch";
import { useParams } from "react-router-dom";
const apiKey = `065cf514db0debfd884bf32efd0de162`;

//This components needs to fetch the DATA!!!!
function CardsContainer() {
    //New

    const { cityParam } = useParams();
    const [isInvalidCity, setIsInvalidCity] = useState<boolean>(false);
    const [dailyArr, setDailyArr] = useState<[]>([]);
    const [units, setUnits] = useState<string>("imperial");
    const [dailyIdx, setDailyIdx] = useState<number>(0);
    const [wasCardClicked, setWasCardClicked] = useState<boolean>(false);

    const changeUnitsFunc = (): void => {
        if (units === "imperial") {
            setUnits("metric");
        } else {
            setUnits("imperial");
        }
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
                const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${cityParam}&appid=${apiKey}`;
                const res = await fetch(url);
                const data = await res.json();
                const lat: number = data.coord.lat;
                const lon: number = data.coord.lon;

                //Get Large Data Set for City
                const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}&units=${units}`;
                const res2 = await fetch(oneCallUrl);
                const oneCallData = await res2.json();
                const oneCallDataDailyArr = oneCallData.daily;
                setDailyArr(oneCallDataDailyArr);
            } catch (err) {
                setIsInvalidCity(true);
            }
        };

        getCityData();
    }, [cityParam, units]);

    return (
        <>
            {" "}
            {isInvalidCity ? null : (
                <div className="cards-switch-container">
                    <div className="cards-container">
                        {dailyArr.map((day: any, idx: number) => {
                            return (
                                <Card
                                    clickedOnCard={clickedOnCard}
                                    data={day}
                                    dataIdx={idx}
                                    key={idx}
                                    units={units}
                                />
                            );
                        })}
                    </div>
                    <UnitSwitch
                        units={units}
                        changeUnitsFunc={changeUnitsFunc}
                    />
                </div>
            )}
            {wasCardClicked ? (
                <DateInfo
                    city={cityParam}
                    dailyData={dailyArr[dailyIdx]}
                    units={units}
                />
            ) : null}
        </>
    );
}

export default CardsContainer;
