import React from "react"
import DayForecastSection from "./day-forecast-components/DayForecastSection"
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

	const sectionTitle: string = `${city.toUpperCase()} - ${month} / ${date} Weather`

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
		<div className="day-forecast">
			<section className="day-weather">
				<h2 className="section-title">{sectionTitle}</h2>
				<div className="date-info">{dayForecastSectionComponents}</div>
			</section>
			<DayForecastCityImage city={city} />
		</div>
	)
}

export default DayForecast
