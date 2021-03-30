import React, { useState, useEffect, useContext } from "react"
import DayForecastSectionIcon from "./DayForecastSectionIcon"
import DayForecastDataRow from "./DayForecastDataRow"
import MeasurementSystemContext from "../../../context/MeasurementSystemContext"
import { labelsAndData, forecastDay } from "../../../interface/interfaces"
import { getData } from "../../../functions/forecast-cards/get-forecast-data"

interface Props {
	forecastDay: forecastDay | undefined
	category: string
}

function DayForecastSection(props: Props) {
	const { forecastDay, category } = props
	const { measurementSystem } = useContext(MeasurementSystemContext)
	const [data, setData] = useState<labelsAndData[]>([])

	useEffect(() => {
		setData(getData(category, forecastDay, measurementSystem))
	}, [category, forecastDay, measurementSystem])

	const categoryClass: string = `day-forecast-information-section-${category}`

	const dayForecastDataRowComponents = data.map(pair => {
		const { label, data } = pair
		return <DayForecastDataRow key={label} label={label} data={data} />
	})

	return (
		<section className={`day-forecast-information-section ${categoryClass}`}>
			<DayForecastSectionIcon category={category} />
			{dayForecastDataRowComponents}
		</section>
	)
}

export default DayForecastSection
