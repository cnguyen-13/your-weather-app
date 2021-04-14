import { labelsAndData } from "../../interface/interfaces"
import { CATEGORIES } from "../../constants/day-forecast/categories"
import { getAllTemps } from "../get-day-forecast/get-all-temps"
import { getAllWeather } from "../get-day-forecast/get-all-weather"
import { getAllWind } from "../get-day-forecast/get-all-wind"

export function getData(
	category: string,
	forecastOfDay: any,
	measurementSystem: string
): labelsAndData[] {
	if (category === CATEGORIES.TEMPERATURE)
		return getAllTemps(forecastOfDay, measurementSystem)
	if (category === CATEGORIES.WIND)
		return getAllWind(forecastOfDay, measurementSystem)
	return getAllWeather(forecastOfDay)
}
