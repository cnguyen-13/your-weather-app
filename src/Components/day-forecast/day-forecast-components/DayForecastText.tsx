import React from "react"

interface Props {
	title: string
	dayForecastSections: any
}

function DayForecastText(props: Props) {
	const { title, dayForecastSections } = props

	return (
		<section className="pb-3 text-centered text-left-desktop df-flex-item-40">
			<h2 className="mb-2 fs-med fw-normal">{title}</h2>
			<div className="grid">{dayForecastSections}</div>
		</section>
	)
}

export default DayForecastText
