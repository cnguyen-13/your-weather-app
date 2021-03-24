import React from "react"

interface Props {
	weatherDescription: string
}

function FCardDescription(props: Props) {
	const { weatherDescription } = props

	return <p className="card-description">{weatherDescription}</p>
}

export default FCardDescription
