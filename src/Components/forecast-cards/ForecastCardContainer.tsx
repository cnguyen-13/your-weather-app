import React, { useState, useEffect, useContext } from "react"
import MeasurementSystemContext from "../../context/MeasurementSystemContext"
import ForecastCard from "./forecast-card/ForecastCard"
import DayForecast from "../day-forecast/DayForecast"
import { getCityForecastDays } from "../../functions/forecast-cards/get-city-daily-data"
import { forecastDay } from "../../interface/interfaces"

interface Props {
	city: string
}

function ForecastCardContainer(props: Props) {
	const { city } = props
	const { measurementSystem } = useContext(MeasurementSystemContext)
	const [forecastDays, setForecastDays] = useState<forecastDay[]>([])
	const [forecastDay, setForecastDay] = useState<forecastDay>(forecastDays[0])
	const [idxActive, setIdxActive] = useState<number | null>(null)
	const [wasCardClicked, setWasCardClicked] = useState<boolean>(false)

	useEffect(() => {
		getCityForecastDays(setForecastDays, city, measurementSystem)
		setWasCardClicked(false)
		setIdxActive(null)
	}, [city, measurementSystem])

	function onClickCardHandler(e: any): void {
		let element = e.target
		while (element.id.length !== 1) {
			element = element.parentElement
		}
		const idx = parseInt(element.id, 10)
		setIdxActive(idx)
		setForecastDay(forecastDays[idx])
		setWasCardClicked(true)
	}

	const forcastCardComponents = forecastDays.map(
		(forecastDay: forecastDay, idx: number) => {
			return (
				<ForecastCard
					isActive={idx === idxActive}
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
			<div className="dimen-cards-container flex-centered flex-wrap gap-med mb-3 flex-jc-space-between-1920 txt-color-white bg-color-primary">
				<div className="dimen-cards-container max-width-centered flex-centered flex-wrap gap-med mb-3 flex-jc-space-between-1920">
					{forcastCardComponents}
				</div>
			</div>
			{dayForecastComponent}
		</>
	)
}

export default ForecastCardContainer
