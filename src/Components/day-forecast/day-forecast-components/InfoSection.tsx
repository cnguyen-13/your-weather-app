import React, { useState, useEffect, useContext } from "react"
import Icon from "./Icon"
import DataRow from "./DataRow"
import MeasurementSystemContext from "../../../context/MeasurementSystemContext"
import { labelsAndData, forecastDay } from "../../../interface/interfaces"
import { getData } from "../../../functions/forecast-cards/get-forecast-data"

interface Props {
	forecastDay: forecastDay | undefined
	category: string
}

function InfoSection(props: Props) {
	const { forecastDay, category } = props
	const { measurementSystem } = useContext(MeasurementSystemContext)
	const [data, setData] = useState<labelsAndData[]>([])

	useEffect(() => {
		setData(getData(category, forecastDay, measurementSystem))
	}, [category, forecastDay, measurementSystem])

	const dayForecastDataRowComponents = data.map(pair => {
		const { label, data } = pair
		return <DataRow key={label} label={label} data={data} />
	})

	return (
		<section className="mb-2">
			<Icon category={category} />
			{dayForecastDataRowComponents}
		</section>
	)
}

export default InfoSection
