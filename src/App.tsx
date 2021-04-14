import React, { useState } from "react"
import { Switch, Route } from "react-router-dom"
import Intro from "./Ccomponents/intro/Intro"
import NavBar from "./Ccomponents/nav-bar/NavBar"
import CityPage from "./Ccomponents/city-page/CityPage"
import Mask from "./Mask"
import MeasurementSystemContext from "./context/MeasurementSystemContext"
import { MS } from "./constants/day-forecast/measurement-system"
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
					<MeasurementSystemContext.Provider
						value={{ measurementSystem, toggleMeasurementSystem }}
					>
						<Mask />
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
