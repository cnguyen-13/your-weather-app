import React, { useState, useEffect } from "react";
import InfoHeader from "./InfoHeader";
import { useParams } from "react-router-dom";
import CardsContainer from "./Cards/CardsContainer";
//Error function

function InfoPage() {
    const { cityParam } = useParams();
    const [isInvalidCity, setIsInvalidCity] = useState<boolean>(false);

    useEffect(() => {
        setIsInvalidCity(false);
    }, [cityParam]);

    if (isInvalidCity) {
        return (
            <div className="error-page">
                <h2 className="city-title">
                    {cityParam.toUpperCase()} is an{" "}
                    <span className="error">invalid City!</span>
                </h2>
            </div>
        );
    } else {
        return (
            <div className="info-page">
                <InfoHeader setIsInvalidCity={setIsInvalidCity} />
                <CardsContainer />
            </div>
        );
    }
}

export default InfoPage;
