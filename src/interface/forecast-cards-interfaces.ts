export interface feelsLike {
	day: number
	night: number
	eve: number
	morn: number
}

export interface temps {
	day: number
	eve: number
	max: number
	min: number
	morn: number
	night: number
}

export interface forecastDay {
	clouds: number
	dew_point: number
	dt: number
	feels_like: feelsLike
	humidity: number
	pop: number
	pressure: number
	rain: number
	sunrise: number
	sunset: number
	temp: temps
	uvi: number
	weather: any
	wind_deg: number
	wind_speed: number
}
