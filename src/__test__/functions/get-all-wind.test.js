const { getAllWind } = require("../../functions/get-day-forecast/get-all-wind")
const {
	testData1,
	testData2,
	testData3,
	testData4,
} = require("../../test-data/test-data")

const expectedResultsTest1Imperial = [
	{ label: "Degree", data: "139 °" },
	{ label: "Speed", data: "5.19 mph" },
]

const expectedResultsTest2Imperial = [
	{ label: "Degree", data: "180 °" },
	{ label: "Speed", data: "14.9 mph" },
]

const expectedResultsTest3Metric = [
	{ label: "Degree", data: "252 °" },
	{ label: "Speed", data: "2.93 m/s" },
]

const expectedResultsTest4Metric = [
	{ label: "Degree", data: "237 °" },
	{ label: "Speed", data: "3.23 m/s" },
]

test("getAllWind function Test #1: Imperial", () => {
	const resultArr = getAllWind(testData1, "imperial")
	for (let i = 0; i < resultArr.length; i++) {
		const obj = resultArr[i]
		const label = obj.label
		const data = obj.data
		const expectedObj = expectedResultsTest1Imperial[i]
		const expectedLabel = expectedObj.label
		const expectedData = expectedObj.data
		expect(label).toBe(expectedLabel)
		expect(data).toBe(expectedData)
	}
})

test("getAllWind function Test #2", () => {
	const resultArr = getAllWind(testData2, "imperial")
	for (let i = 0; i < resultArr.length; i++) {
		const obj = resultArr[i]
		const label = obj.label
		const data = obj.data
		const expectedObj = expectedResultsTest2Imperial[i]
		const expectedLabel = expectedObj.label
		const expectedData = expectedObj.data
		expect(label).toBe(expectedLabel)
		expect(data).toBe(expectedData)
	}
})

test("getAllWind function Test #3", () => {
	const resultArr = getAllWind(testData3, "metric")
	for (let i = 0; i < resultArr.length; i++) {
		const obj = resultArr[i]
		const label = obj.label
		const data = obj.data
		const expectedObj = expectedResultsTest3Metric[i]
		const expectedLabel = expectedObj.label
		const expectedData = expectedObj.data
		expect(label).toBe(expectedLabel)
		expect(data).toBe(expectedData)
	}
})

test("getAllWind function Test #4", () => {
	const resultArr = getAllWind(testData4, "metric")
	for (let i = 0; i < resultArr.length; i++) {
		const obj = resultArr[i]
		const label = obj.label
		const data = obj.data
		const expectedObj = expectedResultsTest4Metric[i]
		const expectedLabel = expectedObj.label
		const expectedData = expectedObj.data
		expect(label).toBe(expectedLabel)
		expect(data).toBe(expectedData)
	}
})
