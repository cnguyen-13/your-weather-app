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
	forecastDay: forecastDay
	onClickCardHandler: (e: any) => void
	id: number
}

function ForecastCard(props: Props) {
	const { measurementSystem } = useContext(MeasurementSystemContext)
	const { forecastDay, onClickCardHandler, id } = props
	const { dt, weather, temp } = forecastDay

	//Parse Data with Helper Functions
	const { date, month, day } = getDateTimes(dt)
	const { description, icon } = getWeatherInfo(weather[0])
	const { minTemp, maxTemp } = getMinMaxTemps(temp, measurementSystem)

	return (
		<div
			className="card clickable"
			onClick={onClickCardHandler}
			id={id.toString()}
		>
			<ForecastCardIcon icon={icon} description={description} />
			<div className="card-item">
				<ForecastCardDate month={month} date={date} />
				<ForecastCardDay day={day} />
				<ForecastCardDescription description={description} />
				<ForecastCardTemps minTemp={minTemp} maxTemp={maxTemp} />
			</div>
		</div>
	)
}

export default ForecastCard
