import React from "react";
import DateInfoColumn from "./DateInfoColumn";
const { getDateTimes } = require("../../../HelperFunctions/getDateTimes");

interface Props {
    city: string | null;
    dailyData: { dt: number };
    units: string;
}

function DateInfo(props: Props) {
    const { city, dailyData, units } = props;
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
                    units={units}
                />
                <DateInfoColumn
                    cityData={dailyData}
                    title="Weather"
                    units={units}
                />
                <DateInfoColumn
                    cityData={dailyData}
                    title="Winds"
                    units={units}
                />
            </div>
        </section>
    );
}

export default DateInfo;
