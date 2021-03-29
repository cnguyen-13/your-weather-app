import React, { useState, useEffect, useContext } from "react"
import DayForecastSectionIcon from "./DayForecastSectionIcon"
import DayForecastDataRow from "./DayForecastDataRow"
import MeasurementSystemContext from "../../../context/MeasurementSystemContext"
import { labelsAndData } from "../../../interface/city-data"
import { forecastDay } from "../../../interface/forecast-cards-interfaces"
import { getData } from "../../../functions/forecast-cards/get-forecast-data"

interface Props {
	forecastDay: forecastDay
	category: string
}

function DayForecastSection(props: Props) {
	const { forecastDay, category } = props
	const { measurementSystem } = useContext(MeasurementSystemContext)
	const [data, setData] = useState<labelsAndData[]>([])

	useEffect(() => {
		setData(getData(category, forecastDay, measurementSystem))
	}, [category, forecastDay, measurementSystem])

	const dayForecastDataRowComponents = data.map(pair => {
		const { label, data } = pair
		return <DayForecastDataRow key={label} label={label} data={data} />
	})

	return (
		<section className="date-info-section">
			<DayForecastSectionIcon category={category} />
			{dayForecastDataRowComponents}
		</section>
	)
}

export default DayForecastSection
