import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const apiKey = `065cf514db0debfd884bf32efd0de162`;
interface Props {
    units: string;
}

function InfoPage(props: Props) {
    const { units } = props;
    const { city } = useParams();
    const [cityData, setCityData] = useState<any>(null);
    useEffect(() => {
        async function getCityData() {
            //Get Coordinates
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
                const res = await fetch(url);
                const data = await res.json();
                const lat = data.coord.lat;
                const lon = data.coord.lon;

                //Get Large Data Set for City
                const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}&units=${units}`;
                const res2 = await fetch(oneCallUrl);
                const oneCallData = await res2.json();
                setCityData(oneCallData);
                console.log(oneCallData);
            } catch (err) {
                console.log(err);
            }
        }

        getCityData();
    }, [city]);

    return <div className="info-page">{city}</div>;
}

export default InfoPage;
