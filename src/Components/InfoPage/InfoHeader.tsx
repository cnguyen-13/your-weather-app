import React from "react";

interface Props {
    city: string | null;
    country: string | null;
}

function InfoHeader(props: Props) {
    const { city, country } = props;

    return (
        <h2 className="info-page-header">
            City of {city} in {country}
        </h2>
    );
}

export default InfoHeader;
