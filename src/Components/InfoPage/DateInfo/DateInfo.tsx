import React from "react";

interface Props {
    city: string | null;
    cityData: any;
}

function DateInfo(props: Props) {
    const { city, cityData } = props;

    return (
        <div>
            <h2>{city}</h2>

            {cityData.clouds}
        </div>
    );
}

export default DateInfo;
