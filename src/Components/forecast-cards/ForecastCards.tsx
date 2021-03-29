import React, { useState, useEffect, useContext } from "react"
import MeasurementSystemContext from "../../context/MeasurementSystemContext"
import ForecastCard from "./forecast-card/ForecastCard"
import DayForecast from "../day-forecast/DayForecast"
import { getCityForecastDays } from "../../functions/forecast-cards/get-city-daily-data"
import { forecastDay } from "../../interface/forecast-cards-interfaces"

interface Props {
	city: string
}

function ForecastCards(props: Props) {
	const { city } = props
	const { measurementSystem } = useContext(MeasurementSystemContext)
	const [forecastDays, setForecastDays] = useState<forecastDay[]>([])
	const [forecastDay, setForecastDay] = useState<forecastDay>(forecastDays[0])
	const [wasCardClicked, setWasCardClicked] = useState<boolean>(false)

	useEffect(() => {
		getCityForecastDays(setForecastDays, city, measurementSystem)
	}, [city, measurementSystem])

	function onClickCardHandler(e: any): void {
		const element = e.target.id ? e.target : e.target.parentElement
		const idx = parseInt(element.id, 10)
		setForecastDay(forecastDays[idx])
		setWasCardClicked(true)
	}

	const forcastCardComponents = forecastDays.map(
		(forecastDay: forecastDay, idx: number) => {
			return (
				<ForecastCard
					onClickCardHandler={onClickCardHandler}
					forecastDay={forecastDay}
					id={idx}
					key={idx}
				/>
			)
		}
	)

	const dayForecastComponent = wasCardClicked ? (
		<DayForecast city={city} forecastDay={forecastDay} />
	) : null

	return (
		<>
			<div className="cards-container">{forcastCardComponents}</div>
			{dayForecastComponent}
		</>
	)
}

export default ForecastCards
