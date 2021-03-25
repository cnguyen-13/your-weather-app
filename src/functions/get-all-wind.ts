interface dataArrayObject {
	label: string
	data: string
}

function getAllWind(cityData: any, measurementSys: string): dataArrayObject[] {
	const units: string = measurementSys === "imperial" ? "mph" : "m/s"
	const windSpeed: number = cityData.wind_speed
	const windDegree: number = cityData.wind_deg
	return [
		{ label: "Degree", data: `${windDegree} °` },
		{ label: "Speed", data: `${windSpeed} ${units}` },
	]
}

export { getAllWind }
