import axios from "axios"
import { coordinatesUrl } from "../../functions/get-urls/coordinates-url"
import { forecastUrl } from "../../functions/get-urls/forecast-url"
import { forecastDay } from "../../interface/forecast-cards-interfaces"

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
