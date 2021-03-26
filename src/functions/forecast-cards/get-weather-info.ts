interface DataWeather {
	description: string
	icon: string
}

interface ReturnWeatherObject {
	description: string
	icon: string
}

function getWeatherInfo(dataWeather: DataWeather): ReturnWeatherObject {
	const { description, icon } = dataWeather
	return { description, icon }
}

export { getWeatherInfo }
