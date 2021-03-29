import React from "react"

interface Props {
	month: number
	date: number
}

function ForecastCardDate(props: Props) {
	const { month, date } = props

	return (
		<h3 className="card-date">
			{month} / {date}
		</h3>
	)
}

export default ForecastCardDate
