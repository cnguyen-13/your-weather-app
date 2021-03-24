import React, { useState } from "react"
import Intro from "./Components/Intro/Intro"
import Navbar from "./Components/Navbar/Navbar"
import CityPage from "./Components/CityForecast/CityPage"
import MeasurementSystemContext from "./MeasurementSystemContext"
import { Switch, Route } from "react-router-dom"
import "./styles/styles.min.css"

function App() {
	const [measurementSystem, setMeasurementSystem] = useState<string>("metric")

	const toggleMeasurementSystem = (): void => {
		measurementSystem === "metric"
			? setMeasurementSystem("imperial")
			: setMeasurementSystem("metric")
	}

	return (
		<div className="app">
			<Switch>
				<Route path="/:cityParam">
					<MeasurementSystemContext.Provider
						value={{ measurementSystem, toggleMeasurementSystem }}
					>
						<Navbar />
						<CityPage />
					</MeasurementSystemContext.Provider>
				</Route>
				<Route path="/">
					<Intro />
				</Route>
			</Switch>
		</div>
	)
}

export default App
