import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

interface Props {
    data: any;
    clickedOnCard: any;
    dataIdx: number;
}

function Card(props: Props) {
    const { data, clickedOnCard, dataIdx } = props;
    const { url } = useRouteMatch();
    const minTemp: number = Math.round(data.temp.min);
    const maxTemp: number = Math.round(data.temp.max);
    const weatherDescription: string = data.weather[0].description;
    const weatherIcon: string = data.weather[0].icon;

    //Getting Date
    const milliseconds: number = data.dt * 1000;
    const fullDate: Date = new Date(milliseconds);
    const date: number = fullDate.getDate();
    const month: number = fullDate.getMonth() + 1;
    const dayIdx: number = fullDate.getDay();
    const day: string = days[dayIdx];

    //Wierd propagation happening
    return (
        <Link to={`${url}/${month}-${date}`}>
            <div
                className="card"
                onClick={clickedOnCard}
                id={dataIdx.toString()}
            >
                <h3 className="card-date">
                    {month}/{date}
                </h3>
                <p className="card-day">{day}</p>
                <img
                    className="card-icon"
                    src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                    alt="Weather Icon"
                />
                <p className="card-description">{weatherDescription}</p>
                <p className="card-temps">
                    <span>{minTemp}°F</span> | <span>{maxTemp}°F</span>
                </p>
            </div>
        </Link>
    );
}

export default Card;
