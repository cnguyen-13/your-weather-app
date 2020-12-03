import React from "react";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import CityPage from "./Components/CityForecast/CityPage";
import { Switch, Route } from "react-router-dom";
import "./styles/styles.css";

function App() {
    const city = localStorage.getItem("city") || "[ Your City ]";

    const setLocalCity = (e: any): void => {
        const span = e.target;
        localStorage.setItem("city", span.textContent);
    };

    return (
        <div className="App">
            <Switch>
                <Route path="/:cityParam">
                    <Navbar />
                    <CityPage />
                </Route>
                <Route path="/">
                    <Intro city={city} setLocalCity={setLocalCity} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
