import React from "react"
import DayForecastSection from "./day-forecast-components/DayForecastSection"
import DayForecastText from "./day-forecast-components/DayForecastText"
import DayForecastCityImage from "./day-forecast-components/DayForecastCityImage"
import { getDateTimes } from "../../functions/forecast-cards/get-date-times"
import { CATEGORIES_ARR_VERSION } from "../../constants/day-forecast/categories"
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

	const dayForecastSectionComponents = CATEGORIES_ARR_VERSION.map(
		(category: string, idx: number) => {
			return (
				<DayForecastSection
					forecastDay={forecastDay}
					category={category}
					key={`${category}_${idx}`}
				/>
			)
		}
	)

	return (
		<>
			<div className="max-width-centered pb-3-desktop df-flex-container">
				<DayForecastText
					title={title}
					dayForecastSections={dayForecastSectionComponents}
				/>
				<DayForecastCityImage breakpointClass="after-desktop" />
			</div>
			<DayForecastCityImage breakpointClass="before-desktop" />
		</>
	)
}

export default DayForecast
