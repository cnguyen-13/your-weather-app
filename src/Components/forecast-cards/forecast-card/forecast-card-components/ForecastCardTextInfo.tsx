import React from "react"
import ForecastCardDate from "./ForecastCardDate"
import ForecastCardDetail from "./ForecastCardDetail"

interface Props {
	month: number
	date: number
	day: string
	description: string
	formattedTemps: string
}

function ForecastCardTextInfo(props: Props) {
	const { month, date, day, description, formattedTemps } = props

	return (
		<section className="full-width">
			<ForecastCardDate month={month} date={date} />
			<ForecastCardDetail content={day} />
			<ForecastCardDetail content={description} />
			<ForecastCardDetail content={formattedTemps} />
		</section>
	)
}

export default ForecastCardTextInfo
