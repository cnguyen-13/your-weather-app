import React from "react";
import winds from "../../../images/misc/winds.svg";

interface Props {
    cityData: any;
    tempUnits?: string;
}

function DateInfoWinds(props: Props) {
    const { cityData, tempUnits } = props;
    //Winds
    const windSpeed: number = cityData.wind_speed;
    const windDegree: number = cityData.wind_deg;

    return (
        <div className="date-info-section">
            <div className="date-graphic">
                <img
                    className="date-info-img"
                    src={winds}
                    alt="winds section"
                />
            </div>

            <div className="date-info-text">
                <h4 className="date-info-label">Degrees</h4>
                <p className="date-info-data">{windDegree}°</p>
                <h4 className="date-info-label">Speed</h4>
                <p className="date-info-data">{windSpeed} mph</p>
            </div>
        </div>
    );
}

export default DateInfoWinds;