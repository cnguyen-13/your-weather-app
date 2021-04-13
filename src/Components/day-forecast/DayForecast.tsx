import React from "react"
import Info from "./day-forecast-components/Info"
import CityImage from "./day-forecast-components/CityImage"
import { getDateTimes } from "../../functions/forecast-cards/get-date-times"
import { forecastDay } from "../../interface/interfaces"

interface Props {
	city: string
	forecastDay: forecastDay
}

function DayForecast(props: Props) {
	const { city, forecastDay } = props
	const { dt } = forecastDay
	const { date, month } = getDateTimes(dt)
	const title: string = `${city.toUpperCase()} - ${month} / ${date} Weather`

	return (
		<>
			<div className="max-width-centered pb-3-desktop df-flex-container">
				<Info title={title} forecastDay={forecastDay} />
				<CityImage breakpointClass="after-desktop" />
			</div>
			<CityImage breakpointClass="before-desktop" />
		</>
	)
}

export default DayForecast
