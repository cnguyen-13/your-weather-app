import React from "react";

interface Props {
    weatherIcon: string;
    weatherDescription: string;
}

function CardIcon(props: Props) {
    const { weatherIcon, weatherDescription } = props;

    return (
        <img
            className="card-icon"
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt={`${weatherDescription} Icon`}
        />
    );
}

export default CardIcon;
