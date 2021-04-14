import { CATEGORIES } from "../../constants/day-forecast/categories"
import weather from "../../images/day-forecast/weather.svg"
import temp from "../../images/day-forecast/temp.svg"
import wind from "../../images/day-forecast/wind.svg"

export function getIcon(category: string): string {
	if (category === CATEGORIES.TEMPERATURE) return temp
	if (category === CATEGORIES.WEATHER) return weather
	return wind
}
