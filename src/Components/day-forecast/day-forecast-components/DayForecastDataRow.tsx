import React from "react"

interface Props {
	label: string
	data: string
}

function DayForecastDataRow(props: Props) {
	const { label, data } = props

	return (
		<p className="day-forecast-data-row m-data-row">
			<span className="fw-bold txt-color-primary">{label}:</span> {data}
		</p>
	)
}

export default DayForecastDataRow
