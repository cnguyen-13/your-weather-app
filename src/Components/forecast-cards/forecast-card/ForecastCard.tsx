import React, { useContext } from "react"
import ForecastCardDate from "./forecast-card-components/ForecastCardDate"
import ForecastCardDay from "./forecast-card-components/ForecastCardDay"
import ForecastCardIcon from "./forecast-card-components/ForecastCardIcon"
import ForecastCardDescription from "./forecast-card-components/ForecastCardDescription"
import ForecastCardTemps from "./forecast-card-components/ForecastCardTemps"
import MeasurementSystemContext from "../../../context/MeasurementSystemContext"
import { getDateTimes } from "../../../functions/get-date-times"
import { getWeatherInfo } from "../../../functions/get-weather-info"
import { getMinMaxTemps } from "../../../functions/get-min-max-temps"

interface Props {
	data: any
	clickedOnCard: any
	dataIdx: number
}

function ForecastCard(props: Props) {
	const { measurementSystem } = useContext(MeasurementSystemContext)
	const { data, clickedOnCard, dataIdx } = props
	const temps = data.temp
	const weather = data.weather[0]
	const time = data.dt

	//Parse Data with Helper Functions
	const { minTemp, maxTemp } = getMinMaxTemps(temps, measurementSystem)
	const { weatherDescription, weatherIcon } = getWeatherInfo(weather)
	const { date, month, day } = getDateTimes(time)

	return (
		<div className="card" onClick={clickedOnCard} id={dataIdx.toString()}>
			<ForecastCardDate month={month} date={date} />
			<ForecastCardDay day={day} />
			<ForecastCardIcon
				weatherIcon={weatherIcon}
				weatherDescription={weatherDescription}
			/>
			<ForecastCardDescription weatherDescription={weatherDescription} />
			<ForecastCardTemps minTemp={minTemp} maxTemp={maxTemp} />
		</div>
	)
}

export default ForecastCard
