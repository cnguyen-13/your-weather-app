import React from "react";

interface Props {
    minTemp: number;
    maxTemp: number;
    units: string;
}

function CardTemps(props: Props) {
    const { minTemp, maxTemp, units } = props;
    const tempUnit = units === "imperial" ? "°F" : "°C";

    return (
        <p className="card-temps">
            {minTemp} {tempUnit} | {maxTemp} {tempUnit}
        </p>
    );
}

export default CardTemps;
