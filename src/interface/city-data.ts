export interface cityData {
	dt: number
	sunrise: number
	sunset: number
	temp: {
		day: number
		min: number
		max: number
		night: number
		eve: number
		morn: number
	}
	feels_like: {
		day: number
		night: number
		eve: number
		morn: number
	}
	pressure: number
	humidity: number
	dew_point: number
	wind_speed: number
	wind_deg: number
	weather: [
		{
			id: number
			main: string
			description: string
			icon: string
		}
	]
	clouds: number
	pop: number
	uvi: number
}

export interface cityTemps {
	min: number
	max: number
	morn: number
	day: number
	eve: number
	night: number
}

export interface labelsAndData {
	label: string
	data: string
}