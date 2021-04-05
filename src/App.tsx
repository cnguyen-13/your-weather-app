import React, { useState } from "react"
import Intro from "./components/intro/Intro"
import NavBar from "./components/nav-bar/NavBar"
import CityPage from "./components/city-page/CityPage"
import MeasurementSystemContext from "./context/MeasurementSystemContext"
import { MS } from "./constants/day-forecast/measurement-system"
import { Switch, Route } from "react-router-dom"
import Mask from "./Mask"
import "./styles/styles.min.css"

function App() {
	const [measurementSystem, setMeasurementSystem] = useState<string>(MS.METRIC)

	function toggleMeasurementSystem(): void {
		measurementSystem === MS.METRIC
			? setMeasurementSystem(MS.IMPERIAL)
			: setMeasurementSystem(MS.METRIC)
	}

	return (
		<div className="app">
			<Switch>
				<Route path="/:cityParam">
					<Mask />
					<MeasurementSystemContext.Provider
						value={{ measurementSystem, toggleMeasurementSystem }}
					>
						<NavBar />
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
