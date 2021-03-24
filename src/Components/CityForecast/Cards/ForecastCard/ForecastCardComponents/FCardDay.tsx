import React from "react"

interface Props {
	day: string
}

function FCardDay(props: Props) {
	const { day } = props

	return <p className="card-day">{day}</p>
}

export default FCardDay
