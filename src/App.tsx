import React from "react";
import Intro from "./Components/Intro/Intro";
import Navbar from "./Components/Navbar/Navbar";
import InfoPage from "./Components/InfoPage/InfoPage";
import { Switch, Route } from "react-router-dom";
import SearchPage from "./Components/SearchPage/SearchPage";
import "./styles/styles.css";

function App() {
    const city = localStorage.getItem("city") || "[ Your City ]";

    function setLocalCity(e: any) {
        const span = e.target;
        localStorage.setItem("city", span.textContent);
    }

    return (
        <div className="App">
            <Switch>
                <Route path="/:cityParam">
                    <Navbar />
                    <InfoPage />
                </Route>
                <Route path="/">
                    <Intro city={city} setLocalCity={setLocalCity} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
