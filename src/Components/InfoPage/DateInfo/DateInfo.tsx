import React from "react";
import DateInfoWeather from "./DateInfoWeather";
import DateInfoWinds from "./DateInfoWinds";
import DateInfoTemps from "./DateInfoTemps";

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

    return (
        <section>
            <h2 className="section-title">
                {city}: {`${month} / ${date}`}
            </h2>
            <div className="date-info">
                <DateInfoTemps cityData={cityData} />
                <DateInfoWeather cityData={cityData} />
                <DateInfoWinds cityData={cityData} />
            </div>
        </section>
    );
}

export default DateInfo;
