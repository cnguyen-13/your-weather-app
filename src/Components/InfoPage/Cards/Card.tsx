import React from "react";

interface Props {
    data: any;
}

function Card(props: Props) {
    const { data } = props;
    const minTemp = Math.round(data.temp.min);
    const maxTemp = Math.round(data.temp.max);
    const weatherDescription = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;

    return (
        <div className="card">
            <img
                className="card-icon"
                src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
                alt="Weather Icon"
            />
            <p className="card-description">{weatherDescription}</p>
            <p className="card-temps">
                <span>{minTemp}°F</span> <span>{maxTemp}°F</span>
            </p>
        </div>
    );
}

export default Card;
