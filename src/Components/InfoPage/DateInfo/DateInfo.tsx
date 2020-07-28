import React from "react";
import DateInfoColumn from "./DateInfoColumn";
const { getDateTimes } = require("../../../HelperFunctions/getDateTimes");

interface Props {
    city: string | null;
    cityData: any;
    tempUnits?: string;
}

function DateInfo(props: Props) {
    const { city, cityData } = props;
    //Getting Date
    const time: number = cityData.dt;
    const { date, month } = getDateTimes(time);

    return (
        <section>
            <h2 className="section-title">
                {city}: {`${month} / ${date}`}
            </h2>
            <div className="date-info">
                <DateInfoColumn
                    cityData={cityData}
                    title="Temperatures"
                    units="imperial"
                />
                <DateInfoColumn
                    cityData={cityData}
                    title="Weather"
                    units="imperial"
                />
                <DateInfoColumn
                    cityData={cityData}
                    title="Winds"
                    units="imperial"
                />
            </div>
        </section>
    );
}

export default DateInfo;
