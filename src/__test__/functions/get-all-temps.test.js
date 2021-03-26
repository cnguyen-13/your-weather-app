const {
	getAllTemps,
} = require("../../functions/get-day-forecast/get-all-temps")
const {
	testData1,
	testData2,
	testData3,
	testData4,
} = require("../../test-data/test-data")

const expectedResultImperial1 = [
	{ label: "Min", data: `80 °F` },
	{ label: "Max", data: `88 °F` },
	{ label: "Morning", data: `80 °F` },
	{ label: "Day", data: `87 °F` },
	{ label: "Evening", data: `85 °F` },
	{ label: "Night", data: `80 °F` },
]

const expectedResultImperial2 = [
	{ label: "Min", data: `77 °F` },
	{ label: "Max", data: `83 °F` },
	{ label: "Morning", data: `77 °F` },
	{ label: "Day", data: `83 °F` },
	{ label: "Evening", data: `79 °F` },
	{ label: "Night", data: `78 °F` },
]

const expectedResultMetric3 = [
	{ label: "Min", data: `29 °C` },
	{ label: "Max", data: `35 °C` },
	{ label: "Morning", data: `35 °C` },
	{ label: "Day", data: `35 °C` },
	{ label: "Evening", data: `35 °C` },
	{ label: "Night", data: `29 °C` },
]

const expectedResultMetric4 = [
	{ label: "Min", data: `25 °C` },
	{ label: "Max", data: `38 °C` },
	{ label: "Morning", data: `25 °C` },
	{ label: "Day", data: `35 °C` },
	{ label: "Evening", data: `37 °C` },
	{ label: "Night", data: `28 °C` },
]

test("getAllTemps Function Testing #1 : imperial", () => {
	const dataArr = getAllTemps(testData1, "imperial")
	for (let i = 0; i < dataArr.length; i++) {
		const obj = dataArr[i]
		const label = obj.label
		const data = obj.data
		const expectedObj = expectedResultImperial1[i]
		const expectedObjLabel = expectedObj.label
		const expectedObjData = expectedObj.data
		expect(label).toBe(expectedObjLabel)
		expect(data).toBe(expectedObjData)
	}
})

test("getAllTemps Function Testing #2 : imperial", () => {
	const dataArr = getAllTemps(testData2, "imperial")
	for (let i = 0; i < dataArr.length; i++) {
		const obj = dataArr[i]
		const label = obj.label
		const data = obj.data
		const expectedObj = expectedResultImperial2[i]
		const expectedObjLabel = expectedObj.label
		const expectedObjData = expectedObj.data
		expect(label).toBe(expectedObjLabel)
		expect(data).toBe(expectedObjData)
	}
})

test("getAllTemps Function Testing #3 : metric", () => {
	const dataArr = getAllTemps(testData3, "metric")
	for (let i = 0; i < dataArr.length; i++) {
		const obj = dataArr[i]
		const label = obj.label
		const data = obj.data
		const expectedObj = expectedResultMetric3[i]
		const expectedObjLabel = expectedObj.label
		const expectedObjData = expectedObj.data
		expect(label).toBe(expectedObjLabel)
		expect(data).toBe(expectedObjData)
	}
})

test("getAllTemps Function Testing #4 : metric", () => {
	const dataArr = getAllTemps(testData4, "metric")
	for (let i = 0; i < dataArr.length; i++) {
		const obj = dataArr[i]
		const label = obj.label
		const data = obj.data
		const expectedObj = expectedResultMetric4[i]
		const expectedObjLabel = expectedObj.label
		const expectedObjData = expectedObj.data
		expect(label).toBe(expectedObjLabel)
		expect(data).toBe(expectedObjData)
	}
})
