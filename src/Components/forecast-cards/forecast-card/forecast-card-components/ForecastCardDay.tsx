import React from "react"

interface Props {
	day: string
}

function ForecastCardDay(props: Props) {
	const { day } = props

	return <p className="card-day">{day}</p>
}

export default ForecastCardDay
