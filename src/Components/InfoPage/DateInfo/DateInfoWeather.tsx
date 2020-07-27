import React from "react";
import weather from "../../../images/misc/weather.svg";

interface Props {
    cityData: any;
    tempUnits?: string;
}

function DateInfoWeather(props: Props) {
    const { cityData, tempUnits } = props;
    //Weather
    const weatherHumidity: number = cityData.humidity;
    const weatherPop: number = cityData.pop * 100;
    const weatherClouds: number = cityData.clouds;
    const weatherUVI: number = cityData.uvi;
    return (
        <div className="date-info-section">
            <div className="date-graphic">
                <a href="https://dryicons.com/free-icons/weather-circle-icon">
                    <img
                        className="date-info-img"
                        src={weather}
                        alt="weather section"
                    />
                </a>
            </div>
            <div className="date-info-text">
                <h4 className="date-info-label">Humidity</h4>
                <p className="date-info-data">{weatherHumidity} %</p>

                <h4 className="date-info-label">Chance of Precipitation</h4>
                <p className="date-info-data">{weatherPop} %</p>

                <h4 className="date-info-label">Cloudiness</h4>
                <p className="date-info-data">{weatherClouds} %</p>

                <h4 className="date-info-label">UV Index</h4>
                <p className="date-info-data">{weatherUVI}</p>
            </div>
        </div>
    );
}

export default DateInfoWeather;
