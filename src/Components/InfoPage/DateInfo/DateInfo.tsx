import React from "react";
import DateInfoColumn from "./DateInfoColumn/DateInfoColumn";
const { getDateTimes } = require("../../../HelperFunctions/getDateTimes");

interface Props {
    city: string | null;
    dailyData: { dt: number };
    mSystem: string;
}

function DateInfo(props: Props) {
    const { city, dailyData, mSystem } = props;
    //Getting Date
    const time: number = dailyData.dt;
    const { date, month } = getDateTimes(time);

    return (
        <section>
            <h2 className="section-title">
                {city}: {`${month} / ${date}`}
            </h2>
            <div className="date-info">
                <DateInfoColumn
                    cityData={dailyData}
                    title="Temperatures"
                    mSystem={mSystem}
                />
                <DateInfoColumn
                    cityData={dailyData}
                    title="Weather"
                    mSystem={mSystem}
                />
                <DateInfoColumn
                    cityData={dailyData}
                    title="Winds"
                    mSystem={mSystem}
                />
            </div>
        </section>
    );
}

export default DateInfo;
