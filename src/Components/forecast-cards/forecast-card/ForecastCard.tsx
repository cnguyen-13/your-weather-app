import React, { useContext } from "react"
import ForecastCardDate from "./forecast-card-components/ForecastCardDate"
import ForecastCardDay from "./forecast-card-components/ForecastCardDay"
import ForecastCardIcon from "./forecast-card-components/ForecastCardIcon"
import ForecastCardDescription from "./forecast-card-components/ForecastCardDescription"
import ForecastCardTemps from "./forecast-card-components/ForecastCardTemps"
import MeasurementSystemContext from "../../../context/MeasurementSystemContext"
import { getDateTimes } from "../../../functions/forecast-cards/get-date-times"
import { getWeatherInfo } from "../../../functions/forecast-cards/get-weather-info"
import { getMinMaxTemps } from "../../../functions/forecast-cards/get-min-max-temps"
import { forecastDay } from "../../../interface/interfaces"

interface Props {
	isActive: boolean
	forecastDay: forecastDay
	onClickCardHandler: (e: any) => void
	id: number
}

function ForecastCard(props: Props) {
	const { measurementSystem } = useContext(MeasurementSystemContext)
	const { isActive, forecastDay, onClickCardHandler, id } = props
	const { dt, weather, temp } = forecastDay

	//Parse Data with Helper Functions
	const { date, month, day } = getDateTimes(dt)
	const { description, icon } = getWeatherInfo(weather[0])
	const { minTemp, maxTemp } = getMinMaxTemps(temp, measurementSystem)

	return (
		<div
			className={`card p-relative dimen-card fs-sm card-hover gap-sm transition-time flex-centered clickable ${
				isActive ? "card-active" : null
			}`}
			onClick={onClickCardHandler}
			id={id.toString()}
		>
			<ForecastCardIcon icon={icon} description={description} />
			<div className="card-item full-width">
				<ForecastCardDate month={month} date={date} />
				<ForecastCardDay day={day} />
				<ForecastCardDescription description={description} />
				<ForecastCardTemps minTemp={minTemp} maxTemp={maxTemp} />
			</div>
		</div>
	)
}

export default ForecastCard
