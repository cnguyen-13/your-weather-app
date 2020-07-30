import React from "react";

interface Props {
    minTemp: string;
    maxTemp: string;
}

function CardTemps(props: Props) {
    const { minTemp, maxTemp } = props;

    return (
        <p className="card-temps">
            {minTemp} | {maxTemp}
        </p>
    );
}

export default CardTemps;
