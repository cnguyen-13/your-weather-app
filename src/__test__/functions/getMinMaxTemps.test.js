const { getMinMaxTemps } = require("../../HelperFunctions/getMinMaxTemps");
const {
    testData1,
    testData2,
    testData3,
    testData4,
} = require("../../Data/testData");

const expectedResultTest1 = { minTemp: 80, maxTemp: 88 };
const expectedResultTest2 = { minTemp: 77, maxTemp: 83 };
const expectedResultTest3 = { minTemp: 29, maxTemp: 35 };
const expectedResultTest4 = { minTemp: 25, maxTemp: 38 };

test("getMinMaxTemps Function Testing #1", () => {
    const resultObj = getMinMaxTemps(testData1.temp);
    const resultMin = resultObj.minTemp;
    const resultMax = resultObj.maxTemp;
    const expectedObj = expectedResultTest1;
    const expectedMin = expectedObj.minTemp;
    const expectedMax = expectedObj.maxTemp;
    expect(resultMin).toBe(expectedMin);
    expect(resultMax).toBe(expectedMax);
});
test("getMinMaxTemps Function Testing #2", () => {
    const resultObj = getMinMaxTemps(testData2.temp);
    const resultMin = resultObj.minTemp;
    const resultMax = resultObj.maxTemp;
    const expectedObj = expectedResultTest2;
    const expectedMin = expectedObj.minTemp;
    const expectedMax = expectedObj.maxTemp;
    expect(resultMin).toBe(expectedMin);
    expect(resultMax).toBe(expectedMax);
});
test("getMinMaxTemps Function Testing #3", () => {
    const resultObj = getMinMaxTemps(testData3.temp);
    const resultMin = resultObj.minTemp;
    const resultMax = resultObj.maxTemp;
    const expectedObj = expectedResultTest3;
    const expectedMin = expectedObj.minTemp;
    const expectedMax = expectedObj.maxTemp;
    expect(resultMin).toBe(expectedMin);
    expect(resultMax).toBe(expectedMax);
});
test("getMinMaxTemps Function Testing #4", () => {
    const resultObj = getMinMaxTemps(testData4.temp);
    const resultMin = resultObj.minTemp;
    const resultMax = resultObj.maxTemp;
    const expectedObj = expectedResultTest4;
    const expectedMin = expectedObj.minTemp;
    const expectedMax = expectedObj.maxTemp;
    expect(resultMin).toBe(expectedMin);
    expect(resultMax).toBe(expectedMax);
});
