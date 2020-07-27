import React, { useState } from "react";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import InfoPage from "./Components/InfoPage/InfoPage";
import { Switch, Route } from "react-router-dom";
import "./styles/styles.css";

function App() {
    const city = localStorage.getItem("city") || "[ Your City ]";
    const [units, setUnits] = useState<string>("imperial");

    function setLocalCity(e: any) {
        const span = e.target;
        localStorage.setItem("city", span.textContent);
    }

    function changeUnitsFunc(): void {
        if (units === "imperial") {
            setUnits("metric");
        } else {
            setUnits("imperial");
        }
    }

    return (
        <div className="App">
            <Switch>
                <Route path="/:cityParam">
                    <Navbar units={units} changeUnitsFunc={changeUnitsFunc} />
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
