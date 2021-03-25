interface DataWeather {
	description: string
	icon: string
}

interface ReturnWeatherObject {
	weatherDescription: string
	weatherIcon: string
}

function getWeatherInfo(dataWeather: DataWeather): ReturnWeatherObject {
	const weatherDescription: string = dataWeather.description
	const weatherIcon: string = dataWeather.icon
	return { weatherDescription, weatherIcon }
}
export { getWeatherInfo }
