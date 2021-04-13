import React from "react"
import Date from "./Date"
import Detail from "./Detail"

interface Props {
	month: number
	date: number
	day: string
	description: string
	formattedTemps: string
}

function TextInfo(props: Props) {
	const { month, date, day, description, formattedTemps } = props

	return (
		<section className="full-width">
			<Date month={month} date={date} />
			<Detail content={day} />
			<Detail content={description} />
			<Detail content={formattedTemps} />
		</section>
	)
}

export default TextInfo
