import React from "react";

interface Props {
    weatherIcon: string;
}

function CardIcon(props: Props) {
    const { weatherIcon } = props;

    return (
        <img
            className="card-icon"
            src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
            alt="Weather Icon"
        />
    );
}

export default CardIcon;
