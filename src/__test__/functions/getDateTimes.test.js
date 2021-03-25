const { getDateTimes } = require("../../functions/get-date-times")

const {
	testData1,
	testData2,
	testData3,
	testData4,
} = require("../../data/test-data")

const expectedResultsTest1 = { date: 2, month: 8, day: "Sunday" }
const expectedResultsTest2 = { date: 30, month: 7, day: "Thursday" }
const expectedResultsTest3 = { date: 28, month: 7, day: "Tuesday" }
const expectedResultsTest4 = { date: 31, month: 7, day: "Friday" }

test("getDateTimes Function Test #1", () => {
	const result = getDateTimes(testData1.dt)
	const expected = expectedResultsTest1
	expect(result.date).toBe(expected.date)
	expect(result.month).toBe(expected.month)
	expect(result.day).toBe(expected.day)
})

test("getDateTimes Function Test #2", () => {
	const result = getDateTimes(testData2.dt)
	const expected = expectedResultsTest2
	expect(result.date).toBe(expected.date)
	expect(result.month).toBe(expected.month)
	expect(result.day).toBe(expected.day)
})

test("getDateTimes Function Test #3", () => {
	const result = getDateTimes(testData3.dt)
	const expected = expectedResultsTest3
	expect(result.date).toBe(expected.date)
	expect(result.month).toBe(expected.month)
	expect(result.day).toBe(expected.day)
})

test("getDateTimes Function Test #4", () => {
	const result = getDateTimes(testData4.dt)
	const expected = expectedResultsTest4
	expect(result.date).toBe(expected.date)
	expect(result.month).toBe(expected.month)
	expect(result.day).toBe(expected.day)
})
