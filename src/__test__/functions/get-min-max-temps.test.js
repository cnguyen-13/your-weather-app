const {
	getMinMaxTemps,
} = require("../../functions/forecast-cards/get-min-max-temps")
const {
	testData1,
	testData2,
	testData3,
	testData4,
} = require("../../test-data/test-data")

const expectedResultTest1 = { minTemp: `80 °F`, maxTemp: `88 °F` }
const expectedResultTest2 = { minTemp: `77 °F`, maxTemp: `83 °F` }
const expectedResultTest3 = { minTemp: `29 °C`, maxTemp: `35 °C` }
const expectedResultTest4 = { minTemp: `25 °C`, maxTemp: `38 °C` }

test("getMinMaxTemps Function Testing #1", () => {
	const resultObj = getMinMaxTemps(testData1.temp, "imperial")
	const resultMin = resultObj.minTemp
	const resultMax = resultObj.maxTemp
	const expectedObj = expectedResultTest1
	const expectedMin = expectedObj.minTemp
	const expectedMax = expectedObj.maxTemp
	expect(resultMin).toBe(expectedMin)
	expect(resultMax).toBe(expectedMax)
})
test("getMinMaxTemps Function Testing #2", () => {
	const resultObj = getMinMaxTemps(testData2.temp, "imperial")
	const resultMin = resultObj.minTemp
	const resultMax = resultObj.maxTemp
	const expectedObj = expectedResultTest2
	const expectedMin = expectedObj.minTemp
	const expectedMax = expectedObj.maxTemp
	expect(resultMin).toBe(expectedMin)
	expect(resultMax).toBe(expectedMax)
})
test("getMinMaxTemps Function Testing #3", () => {
	const resultObj = getMinMaxTemps(testData3.temp, "metric")
	const resultMin = resultObj.minTemp
	const resultMax = resultObj.maxTemp
	const expectedObj = expectedResultTest3
	const expectedMin = expectedObj.minTemp
	const expectedMax = expectedObj.maxTemp
	expect(resultMin).toBe(expectedMin)
	expect(resultMax).toBe(expectedMax)
})
test("getMinMaxTemps Function Testing #4", () => {
	const resultObj = getMinMaxTemps(testData4.temp, "metric")
	const resultMin = resultObj.minTemp
	const resultMax = resultObj.maxTemp
	const expectedObj = expectedResultTest4
	const expectedMin = expectedObj.minTemp
	const expectedMax = expectedObj.maxTemp
	expect(resultMin).toBe(expectedMin)
	expect(resultMax).toBe(expectedMax)
})
