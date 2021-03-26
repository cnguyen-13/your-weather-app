const { coordinatesUrl } = require("../../functions/get-urls/coordinates-url")

test("Testing CoordinatesUrl Function", () => {
	expect(coordinatesUrl("Paris")).toBe(
		`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
	)

	expect(coordinatesUrl("Berlin")).toBe(
		`https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
	)

	expect(coordinatesUrl("Tokyo")).toBe(
		`https://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
	)

	expect(coordinatesUrl("London")).toBe(
		`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
	)
})
