import React from "react"

interface Props {
	icon: string
	description: string
}

function ForecastCardIcon(props: Props) {
	const { icon, description } = props

	return (
		<img
			className="card-icon"
			src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
			alt={description}
		/>
	)
}

export default ForecastCardIcon
