import React from "react"
import { getIcon } from "../../../functions/forecast-cards/get-icon"

interface Props {
	category: string
}

function DayForecastSectionIcon(props: Props) {
	const { category } = props
	const icon: string = getIcon(category)

	return <img className="day-forecast-section-icon" src={icon} alt="" />
}

export default DayForecastSectionIcon
