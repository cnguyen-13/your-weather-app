import React from "react"

interface Props {
	icon: string
	description: string
}

function Icon(props: Props) {
	const { icon, description } = props

	return (
		<img
			className="dimen-card-icon"
			src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
			alt={description}
		/>
	)
}

export default Icon
