import React from "react"

interface Props {
	description: string
}

function ForecastCardDescription(props: Props) {
	const { description } = props

	return <p className="card-description">{description}</p>
}

export default ForecastCardDescription
