import { CATEGORIES } from "../../constants/categories"
import weather from "../../images/day/weather.svg"
import temp from "../../images/day/temp.svg"
import wind from "../../images/day/wind.svg"

export function getIcon(category: string): string {
	if (category === CATEGORIES.TEMPERATURE) return temp
	if (category === CATEGORIES.WEATHER) return weather
	return wind
}
