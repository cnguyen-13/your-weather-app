import React from "react";
import Card from "./Card";

interface Props {
    cityData: any;
}

function CardsContainer(props: Props) {
    const { cityData } = props;
    const dailyArr = cityData.daily;

    return (
        <div className="cards-container">
            {dailyArr.map((day: any) => {
                return <Card data={day} />;
            })}
        </div>
    );
}

export default CardsContainer;
