import React from "react"

interface Props {
	label: string
	data: string
}

function DayForecastDataRow(props: Props) {
	const { label, data } = props

	return (
		<p className="day-forecast-data-row">
			<span className="bold primary-color">{label}:</span> {data}
		</p>
	)
}

export default DayForecastDataRow
