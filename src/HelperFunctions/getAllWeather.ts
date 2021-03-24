interface dataArrayObject {
	label: string
	data: string
}

function getAllWeather(cityData: any): dataArrayObject[] {
	const humidity: number = cityData.humidity
	const pop: number = cityData.pop * 100
	const clouds: number = cityData.clouds
	const uvIndex: number = cityData.uvi
	return [
		{ label: "Humidity", data: `${humidity} %` },
		{ label: "Chance of Precipitation", data: `${pop} %` },
		{ label: "Cloudiness", data: `${clouds} %` },
		{ label: "UV Index", data: `${uvIndex}` },
	]
}

export { getAllWeather }
