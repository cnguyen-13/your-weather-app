const {
	getWeatherInfo,
} = require("../../functions/forecast-cards/get-weather-info")
const {
	testData1,
	testData2,
	testData3,
	testData4,
} = require("../../test-data/test-data")

const expectedResultTest1 = {
	weatherDescription: "overcast clouds",
	weatherIcon: "04d",
}
const expectedResultTest2 = {
	weatherDescription: "moderate rain",
	weatherIcon: "10d",
}
const expectedResultTest3 = {
	weatherDescription: "light rain",
	weatherIcon: "10d",
}
const expectedResultTest4 = {
	weatherDescription: "light rain",
	weatherIcon: "10d",
}

test("getWeatherInfo Test #1", () => {
	const weather = testData1.weather[0]
	const { description, icon } = getWeatherInfo(weather)
	const expectedResult = expectedResultTest1
	expect(description).toBe(expectedResult.weatherDescription)
	expect(icon).toBe(expectedResult.weatherIcon)
})

test("getWeatherInfo Test #2", () => {
	const weather = testData2.weather[0]
	const { description, icon } = getWeatherInfo(weather)
	const expectedResult = expectedResultTest2
	expect(description).toBe(expectedResult.weatherDescription)
	expect(icon).toBe(expectedResult.weatherIcon)
})

test("getWeatherInfo Test #3", () => {
	const weather = testData3.weather[0]
	const { description, icon } = getWeatherInfo(weather)
	const expectedResult = expectedResultTest3
	expect(description).toBe(expectedResult.weatherDescription)
	expect(icon).toBe(expectedResult.weatherIcon)
})

test("getWeatherInfo Test #4", () => {
	const weather = testData4.weather[0]
	const { description, icon } = getWeatherInfo(weather)
	const expectedResult = expectedResultTest4
	expect(description).toBe(expectedResult.weatherDescription)
	expect(icon).toBe(expectedResult.weatherIcon)
})
