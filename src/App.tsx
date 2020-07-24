import React, { useState, useEffect } from "react";
import Intro from "./Components/Intro/Intro";
import InfoPage from "./Components/InfoPage/InfoPage";
import { Switch, Link, Route } from "react-router-dom";
import "./styles/styles.css";

function App() {
    const [city, setCity] = useState<string>(
        localStorage.getItem("city") || "[ Your City ]"
    );
    const [units, setUnits] = useState("imperial");

    function setLocalCity(e: any) {
        const span = e.target;
        localStorage.setItem("city", span.textContent);
    }

    return (
        <div className="App">
            <Switch>
                <Route path="/:city">
                    {/* <InformationPage /> */}
                    <Intro city={city} setLocalCity={setLocalCity} />
                    <InfoPage units={units} />
                </Route>
                <Route path="/">
                    <Intro city={city} setLocalCity={setLocalCity} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

//If cityData is good, then load a page with that data/forecast
//If cityData is BAD, load a generic city search like original app then load a page with that data/forecast
