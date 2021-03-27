import React from "react"
import { Link } from "react-router-dom"

interface Props {
	city: string
}

function IntroForecastButton(props: Props) {
	const { city } = props

	return (
		<Link to={`/${city}`}>
			<button className="intro-btn">CHECK WEATHER</button>
		</Link>
	)
}

export default IntroForecastButton
