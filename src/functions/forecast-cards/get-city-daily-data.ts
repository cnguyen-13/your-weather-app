import axios from "axios"
import { coordinatesUrl } from "../urls/coordinates-url"
import { forecastUrl } from "../urls/forecast-url"
import { forecastDay } from "../../interface/interfaces"

interface Coordinates {
	lat: number
	lon: number
}

export async function getCityForecastDays(
	dailyArrSetterFunc: any,
	city: string,
	measurementSystem: string
) {
	try {
		//Get Coordinates
		const coordUrl: string = coordinatesUrl(city)
		const res = await axios.get(coordUrl)
		const data = res.data
		const { lat, lon }: Coordinates = data.coord

		//Get Large Data Set for City
		const fcastUrl: string = forecastUrl(lat, lon, measurementSystem)
		const forecastRes = await axios.get(fcastUrl)
		const forecastData = forecastRes.data
		const forecastDailies: forecastDay[] = forecastData.daily
		dailyArrSetterFunc(forecastDailies)
	} catch (err) {
		console.log(err)
	}
}
