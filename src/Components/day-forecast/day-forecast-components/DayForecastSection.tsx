import React, { useState, useEffect, useContext } from "react"
import DataCell from "./DayForecastDataRow"
import MeasurementSystemContext from "../../../context/MeasurementSystemContext"
import { CATEGORIES } from "../DayForecast"
const { getAllTemps } = require("../../../HelperFunctions/getAllTemps")
const { getAllWeather } = require("../../../HelperFunctions/getAllWeather")
const { getAllWind } = require("../../../HelperFunctions/getAllWind")

interface Props {
	cityData: any
	category: string
}

interface dataObject {
	label: string
	data: string
}

function DayColumn(props: Props) {
	const { cityData, category } = props
	const { measurementSystem } = useContext(MeasurementSystemContext)
	const [data, setData] = useState<dataObject[] | undefined>([])

	useEffect(() => {
		//Obtain correct Data set
		let dataArr: dataObject[] | undefined
		if (category === CATEGORIES.TEMPERATURE) {
			dataArr = getAllTemps(cityData, measurementSystem)
		} else if (category === CATEGORIES.WIND) {
			dataArr = getAllWind(cityData, measurementSystem)
		} else {
			dataArr = getAllWeather(cityData)
		}

		setData(dataArr)
	}, [cityData, measurementSystem, category])

	return (
		<section className="date-info-section">
			<div className="date-info-text">
				{data
					? data.map(pair => (
							<DataCell
								category={category}
								key={pair.label}
								label={pair.label}
								data={pair.data}
							/>
					  ))
					: null}
			</div>
		</section>
	)
}

export default DayColumn
