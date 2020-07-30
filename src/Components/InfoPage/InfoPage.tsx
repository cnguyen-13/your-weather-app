import React, { useState, useEffect } from "react";
import HeroBackground from "./HeroBackground";
import { useParams } from "react-router-dom";
import CardsContainer from "./Cards/CardsContainer";
import InvalidCityPage from "./InvalidCityPage";
//Error function

function InfoPage() {
    const { cityParam } = useParams();
    const [isInvalidCity, setIsInvalidCity] = useState<boolean>(false);

    //Resets so that the new cityParam has a chance of being valid
    useEffect(() => {
        setIsInvalidCity(false);
    }, [cityParam]);

    if (isInvalidCity) {
        return <InvalidCityPage invalidCityName={cityParam.toUpperCase()} />;
    }

    return (
        <div className="info-page">
            <HeroBackground setIsInvalidCity={setIsInvalidCity} />
            <CardsContainer />
        </div>
    );
}

export default InfoPage;
