import React from "react";
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
    city: string | null;
    cityData: any;
    tempUnits?: string;
}

function DateInfo(props: Props) {
    const { city, cityData } = props;
    //Getting Date
    const milliseconds: number = cityData.dt * 1000;
    const fullDate: Date = new Date(milliseconds);
    const date: number = fullDate.getDate();
    const month: number = fullDate.getMonth() + 1;
    //Parse data

    //Temps
    const tempMin: number = Math.round(cityData.temp.min);
    const tempMax: number = Math.round(cityData.temp.max);
    const tempMorning: number = Math.round(cityData.temp.morn);
    const tempDay: number = Math.round(cityData.temp.day);
    const tempEve: number = Math.round(cityData.temp.eve);
    const tempNight: number = Math.round(cityData.temp.night);

    //Winds
    const windSpeed: number = cityData.wind_speed;
    const windDegree: number = cityData.wind_deg;

    //Weather
    //{`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
    const weatherHumidity: number = cityData.humidity;
    const weatherPop: number = cityData.pop * 100;
    const weatherClouds: number = cityData.clouds;
    const weatherUVI: number = cityData.uvi;

    return (
        <>
            <h2 className="section-title">
                {city}: {`${month} / ${date}`}
            </h2>
            <div className="date-info">
                <h4 className="date-info-subtitle">Temperatures</h4>
                <div className="date-info-temps">
                    <div className="date-info-temps-item">
                        <h4 className="date-info-temps-item-label">Min</h4>
                        <p className="date-info-temps-item-data">
                            {tempMin} °F
                        </p>
                    </div>
                    <div className="date-info-temps-item">
                        <h4 className="date-info-temps-item-label">Max</h4>
                        <p className="date-info-temps-item-data">
                            {tempMax} °F
                        </p>
                    </div>
                    <div className="date-info-temps-item">
                        <h4 className="date-info-temps-item-label">Morning</h4>
                        <p className="date-info-temps-item-data">
                            {tempMorning} °F
                        </p>
                    </div>
                    <div className="date-info-temps-item">
                        <h4 className="date-info-temps-item-label">Day</h4>
                        <p className="date-info-temps-item-data">
                            {tempDay} °F
                        </p>
                    </div>
                    <div className="date-info-temps-item">
                        <h4 className="date-info-temps-item-label">Evening</h4>
                        <p className="date-info-temps-item-data">
                            {tempEve} °F
                        </p>
                    </div>
                    <div className="date-info-temps-item">
                        <h4 className="date-info-temps-item-label">Night</h4>
                        <p className="date-info-temps-item-data">
                            {tempNight} °F
                        </p>
                    </div>
                </div>
                <div className="date-winds-weather-container">
                    <div className="date-info-winds">
                        <h4 className="date-info-subtitle">Winds</h4>
                        <div>
                            <h4 className="subtitle">Degrees</h4>
                            <p className="data">{windDegree}°</p>
                        </div>
                        <div>
                            <h4 className="subtitle">Speed</h4>
                            <p className="data">{windSpeed} mph</p>
                        </div>
                    </div>
                    <div className="date-info-weather">
                        <h4 className="date-info-subtitle">Basic Weather</h4>
                        <div>
                            <h4 className="subtitle">Humidity</h4>
                            <p className="data">{weatherHumidity} %</p>
                        </div>
                        <div>
                            <h4 className="subtitle">
                                Chance of Precipitation
                            </h4>
                            <p className="data">{weatherPop} %</p>
                        </div>
                        <div>
                            <h4 className="subtitle">Cloudiness</h4>
                            <p className="data">{weatherClouds} %</p>
                        </div>
                        <div>
                            <h4 className="subtitle">UV Index</h4>
                            <p className="data">{weatherUVI}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DateInfo;
