import { WEATHER_LABELS } from "../../constants/day-forecast/weather-labels"
import { forecastDay } from "../../interface/interfaces"

interface labelsAndData {
	label: string
	data: string
}

function dataString(data: number, isPercentageValue: boolean): string {
	return isPercentageValue ? `${data} %` : `${data}`
}

function getAllWeather(cityData: forecastDay): labelsAndData[] {
	const { humidity, pop, clouds, uvi } = cityData
	const weatherData: number[] = [humidity, pop * 100, clouds, uvi]
	const labelsAndData: labelsAndData[] = weatherData.map((data, idx) => {
		const label = WEATHER_LABELS[idx]
		const value =
			idx !== 3 //3 is for uvi
				? dataString(data, true)
				: dataString(data, false)

		return {
			label: label,
			data: `${value}`,
		}
	})

	return labelsAndData
}

export { getAllWeather }
