const {
	getAllWeather,
} = require("../../functions/get-day-forecast/get-all-weather")
const {
	testData1,
	testData2,
	testData3,
	testData4,
} = require("../../test-data/test-data")

const expectedResultsTest1 = [
	{ label: "Humidity", data: `51 %` },
	{ label: "Chance of Precipitation", data: `51 %` },
	{ label: "Cloudiness", data: `100 %` },
	{ label: "UV Index", data: `10.51` },
]

const expectedResultsTest2 = [
	{ label: "Humidity", data: `62 %` },
	{ label: "Chance of Precipitation", data: `74 %` },
	{ label: "Cloudiness", data: `97 %` },
	{ label: "UV Index", data: `10.16` },
]

const expectedResultsTest3 = [
	{ label: "Humidity", data: `44 %` },
	{ label: "Chance of Precipitation", data: `72 %` },
	{ label: "Cloudiness", data: `75 %` },
	{ label: "UV Index", data: `11.54` },
]

const expectedResultsTest4 = [
	{ label: "Humidity", data: `34 %` },
	{ label: "Chance of Precipitation", data: `45 %` },
	{ label: "Cloudiness", data: `3 %` },
	{ label: "UV Index", data: `11.42` },
]

test("getAllWeather Function Testing #1", () => {
	const resultArr = getAllWeather(testData1)
	for (let i = 0; i < resultArr.length; i++) {
		const obj = resultArr[i]
		const label = obj.label
		const data = obj.data
		const expectedObj = expectedResultsTest1[i]
		const expectedLabel = expectedObj.label
		const expectedData = expectedObj.data
		expect(label).toBe(expectedLabel)
		expect(data).toBe(expectedData)
	}
})

test("getAllWeather Function Testing #2", () => {
	const resultArr = getAllWeather(testData2)
	for (let i = 0; i < resultArr.length; i++) {
		const obj = resultArr[i]
		const label = obj.label
		const data = obj.data
		const expectedObj = expectedResultsTest2[i]
		const expectedLabel = expectedObj.label
		const expectedData = expectedObj.data
		expect(label).toBe(expectedLabel)
		expect(data).toBe(expectedData)
	}
})

test("getAllWeather Function Testing #3", () => {
	const resultArr = getAllWeather(testData3)
	for (let i = 0; i < resultArr.length; i++) {
		const obj = resultArr[i]
		const label = obj.label
		const data = obj.data
		const expectedObj = expectedResultsTest3[i]
		const expectedLabel = expectedObj.label
		const expectedData = expectedObj.data
		expect(label).toBe(expectedLabel)
		expect(data).toBe(expectedData)
	}
})

test("getAllWeather Function Testing #4", () => {
	const resultArr = getAllWeather(testData4)
	for (let i = 0; i < resultArr.length; i++) {
		const obj = resultArr[i]
		const label = obj.label
		const data = obj.data
		const expectedObj = expectedResultsTest4[i]
		const expectedLabel = expectedObj.label
		const expectedData = expectedObj.data
		expect(label).toBe(expectedLabel)
		expect(data).toBe(expectedData)
	}
})
