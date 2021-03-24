import React, { useState, useEffect } from "react"
import { CATEGORIES } from "../DayWeather"

interface Props {
	label: string
	data: string
	category: string
}

function DataCell(props: Props) {
	const { label, data, category } = props
	const [bgClass, setBgClass] = useState<string>("")
	useEffect(() => {
		if (category === CATEGORIES.TEMPERATURE) {
			setBgClass("data-cell-temp")
		} else if (category === CATEGORIES.WEATHER) {
			setBgClass("data-cell-weather")
		} else {
			setBgClass("data-cell-wind")
		}
	}, [category])

	return (
		<div className={`data-cell ${bgClass}`}>
			<h4 className="date-info-label">{label}</h4>
			<hr />
			<p className="date-info-data">{data}</p>
		</div>
	)
}

export default DataCell
