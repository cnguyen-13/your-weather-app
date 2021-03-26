import { WEATHER_LABELS } from "../../constants/weather-labels"
import { labelsAndData, cityData } from "../../interface/city-data"

function dataString(data: number, isPercentageValue: boolean): string {
	return isPercentageValue ? `${data} %` : `${data}`
}

function getAllWeather(cityData: cityData): labelsAndData[] {
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
