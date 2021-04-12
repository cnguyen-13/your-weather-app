import React from "react"
import { Link } from "react-router-dom"

interface Props {
	city: string
}

function IntroForecastButton(props: Props) {
	const { city } = props

	return (
		<Link to={`/${city}`}>
			<button className="fs-btn cta m-cta p-cta b-none transition-time clickable txt-color-white bg-color-primary">
				CHECK WEATHER
			</button>
		</Link>
	)
}

export default IntroForecastButton
