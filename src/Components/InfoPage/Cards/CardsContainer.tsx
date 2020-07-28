import React, { useState } from "react";
import Card from "./Card";
import DateInfo from "../DateInfo/DateInfo";
import { Switch, Route, useRouteMatch } from "react-router-dom";

interface Props {
    city: string | null;
    cityData: any;
}
//This components needs to fetch the DATA!!!!
function CardsContainer(props: Props) {
    const { city, cityData } = props;
    const dailyArr = cityData.daily;
    const { path, url } = useRouteMatch();
    const [dailyIdx, setDailyIdx] = useState<number>(0);

    const clickedOnCard = (e: any): void => {
        let element = e.target;
        if (!element.id) {
            element = element.parentElement;
        }
        const id = parseInt(element.id, 10);
        setDailyIdx(id);
    };

    return (
        <>
            <div className="cards-container">
                {dailyArr.map((day: any, idx: number) => {
                    return (
                        <Card
                            clickedOnCard={clickedOnCard}
                            data={day}
                            dataIdx={idx}
                            key={idx}
                        />
                    );
                })}
            </div>
            <Switch>
                <Route path={`${path}/:dateParam`}>
                    <DateInfo city={city} cityData={dailyArr[dailyIdx]} />
                </Route>
            </Switch>
        </>
    );
}

export default CardsContainer;
