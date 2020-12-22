import React from "react";
import DayColumn from "./DayColumn/DayColumn";
const { getDateTimes } = require("../../HelperFunctions/getDateTimes");

interface Props {
    city: string | null;
    dailyData: { dt: number };
    mSystem: string;
}

function DayWeather(props: Props) {
    const { city, dailyData, mSystem } = props;
    //Getting Date
    const time: number = dailyData.dt;
    const { date, month } = getDateTimes(time);

    return (
        <section>
            <h2 className="section-title">
                {city} - {`${month} / ${date}`}
            </h2>
            <div className="date-info">
                <DayColumn
                    cityData={dailyData}
                    title="Temperatures"
                    mSystem={mSystem}
                />
                <DayColumn
                    cityData={dailyData}
                    title="Weather"
                    mSystem={mSystem}
                />
                <DayColumn
                    cityData={dailyData}
                    title="Winds"
                    mSystem={mSystem}
                />
            </div>
        </section>
    );
}

export default DayWeather;
