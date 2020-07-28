import React from "react";

interface Props {
    minTemp: number;
    maxTemp: number;
}

function CardTemps(props: Props) {
    const { minTemp, maxTemp } = props;

    return (
        <p className="card-temps">
            {minTemp}°F | {maxTemp}°F
        </p>
    );
}

export default CardTemps;
