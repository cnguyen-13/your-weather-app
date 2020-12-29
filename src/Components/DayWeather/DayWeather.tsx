import React, { useContext } from "react";
import DayColumn from "./DayColumn/DayColumn";
import BackgroundImagesContext from '../../BackgroundImagesContext';
const { getDateTimes } = require("../../HelperFunctions/getDateTimes");

interface Props {
    city: string | null;
    dailyData: { dt: number };
}

function DayWeather(props: Props) {
    const { city, dailyData } = props;
    //Getting Date
    const time: number = dailyData.dt;
    const { date, month } = getDateTimes(time);
    const bgImages = useContext(BackgroundImagesContext);
    const styles = {
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImages[1]})`,
        backgroundAttachment: 'fixed',
    }

    return (
        <section style={styles} className="day-weather">
            <h2 className="section-title">
                {city} - {month} / {date} Weather
            </h2>
            <div className="date-info">
                <DayColumn
                    cityData={dailyData}
                    title="temp"
                />
                <DayColumn
                    cityData={dailyData}
                    title="weather"
                />
                <DayColumn
                    cityData={dailyData}
                    title="wind"
                />
            </div>
        </section>
    );
}

export default DayWeather;
