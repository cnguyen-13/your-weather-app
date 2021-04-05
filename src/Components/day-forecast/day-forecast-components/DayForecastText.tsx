import React from "react"

interface Props {
	title: string
	dayForecastSections: any
}

function DayForecastText(props: Props) {
	const { title, dayForecastSections } = props

	return (
		<section className="day-forecast-text">
			<h2 className="day-forecast-title">{title}</h2>
			<div className="day-forecast-information">{dayForecastSections}</div>
		</section>
	)
}

export default DayForecastText
