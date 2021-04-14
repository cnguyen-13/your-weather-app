function coordinatesUrl(city: string): string {
	return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
}

export { coordinatesUrl }
