import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroBackground from "./HeroBackground";
import FCards from "./Cards/FCards";
import InvalidCityPage from "./InvalidCityPage";

function CityPage() {
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
            <FCards />
        </div>
    );
}

export default CityPage;
