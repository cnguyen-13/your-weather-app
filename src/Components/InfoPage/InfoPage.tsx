import React, { useState, useEffect } from "react";
import CardsContainer from "./Cards/CardsContainer";
import DateInfo from "./DateInfo/DateInfo";
import { useParams, Switch, Route, useRouteMatch } from "react-router-dom";
import InfoHeader from "./InfoHeader";
const apiKey = `065cf514db0debfd884bf32efd0de162`;
interface Props {
    units: string;
}

function InfoPage(props: Props) {
    const { units } = props;
    const { cityParam } = useParams();
    const [cityData, setCityData] = useState<any>(null);
    const [city, setCity] = useState<string | null>(null);
    const [country, setCountry] = useState<string | null>(null);
    const [isInvalidCity, setIsInvalidCity] = useState<boolean>(false);
    const { path, url } = useRouteMatch();
    useEffect(() => {
        async function getCityData() {
            //Reset cityData & invalidCity flag
            setCityData(null);
            setIsInvalidCity(false);
            //Get Coordinates
            try {
                const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${cityParam}&appid=${apiKey}`;
                const res = await fetch(url);
                const data = await res.json();
                const lat: number = data.coord.lat;
                const lon: number = data.coord.lon;
                const cityName: string = data.name;
                const country: string = data.sys.country;
                setCity(cityName);
                setCountry(country);

                //Get Large Data Set for City
                const oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${apiKey}&units=${units}`;
                const res2 = await fetch(oneCallUrl);
                const oneCallData = await res2.json();
                setCityData(oneCallData);
            } catch (err) {
                setIsInvalidCity(true);
            }
        }
        console.log(cityData);
        getCityData();
    }, [cityParam]);

    if (cityData) {
        return (
            <div className="info-page">
                <Switch>
                    {/* <Route path={`${path}/:dayParam`}>
                        <InfoHeader city={city} country={country} />
                        <CardsContainer cityData={cityData} />
                        awiojdaiowjdioawjdoawd
                    </Route> */}
                    <Route path={`${path}`}>
                        <InfoHeader city={city} country={country} />
                        <CardsContainer city={city} cityData={cityData} />
                    </Route>
                </Switch>
            </div>
        );
    } else if (isInvalidCity) {
        return <div className="info-page">{cityParam} is an INVALID City!</div>;
    } else {
        return <div className="info-page">Loading</div>;
    }
}

export default InfoPage;
