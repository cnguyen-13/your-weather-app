import React from "react";

interface Props {
    invalidCityName: string;
}

function InvalidCityPage(props: Props) {
    const { invalidCityName } = props;

    return (
        <div className="error-page">
            <h2 className="city-title">
                {invalidCityName} is an
                <span className="error">invalid City!</span>
            </h2>
        </div>
    );
}

export default InvalidCityPage;
