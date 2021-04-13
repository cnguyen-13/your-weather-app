import React, { useContext } from "react"
import ForecastCardIcon from "./forecast-card-components/ForecastCardIcon"
import ForecastCardTextInfo from "./forecast-card-components/ForecastCardTextInfo"
import MeasurementSystemContext from "../../../context/MeasurementSystemContext"
import { getDateTimes } from "../../../functions/forecast-cards/get-date-times"
import { getWeatherInfo } from "../../../functions/forecast-cards/get-weather-info"
import { getMinMaxTemps } from "../../../functions/forecast-cards/get-min-max-temps"
import { minMaxTempCardFormat } from "../../../functions/forecast-cards/get-temp-card-format"
import { forecastDay } from "../../../interface/interfaces"

interface Props {
	id: number
	isActive: boolean
	forecastDay: forecastDay
	onClickCardHandler: (e: any) => void
}

function ForecastCard(props: Props) {
	const { measurementSystem } = useContext(MeasurementSystemContext)
	const { id, isActive, forecastDay, onClickCardHandler } = props
	const { dt, weather, temp } = forecastDay
	const activeClass = isActive ? "card-active" : null

	//Parse Data with Helper Functions
	const { date, month, day } = getDateTimes(dt)
	const { description, icon } = getWeatherInfo(weather[0])
	const { minTemp, maxTemp } = getMinMaxTemps(temp, measurementSystem)

	return (
		<div
			className={`p-relative dimen-card fs-sm card-hover gap-sm transition-time flex-centered clickable ${activeClass}`}
			onClick={onClickCardHandler}
			id={id.toString()}
		>
			<ForecastCardIcon icon={icon} description={description} />
			<ForecastCardTextInfo
				month={month}
				date={date}
				day={day}
				description={description}
				formattedTemps={minMaxTempCardFormat(minTemp, maxTemp)}
			/>
		</div>
	)
}

export default ForecastCard
