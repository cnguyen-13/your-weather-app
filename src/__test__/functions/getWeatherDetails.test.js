const {
    getWeatherDetails,
} = require("../../HelperFunctions/getWeatherDetails");
const {
    testData1,
    testData2,
    testData3,
    testData4,
} = require("../../Data/testData");

const expectedResultTest1 = {
    weatherDescription: "overcast clouds",
    weatherIcon: "04d",
};
const expectedResultTest2 = {
    weatherDescription: "moderate rain",
    weatherIcon: "10d",
};
const expectedResultTest3 = {
    weatherDescription: "light rain",
    weatherIcon: "10d",
};
const expectedResultTest4 = {
    weatherDescription: "light rain",
    weatherIcon: "10d",
};

test("getWeatherDetails Test #1", () => {
    const weather = testData1.weather[0];
    const { weatherDescription, weatherIcon } = getWeatherDetails(weather);
    const expectedResult = expectedResultTest1;
    expect(weatherDescription).toBe(expectedResult.weatherDescription);
    expect(weatherIcon).toBe(expectedResult.weatherIcon);
});

test("getWeatherDetails Test #2", () => {
    const weather = testData2.weather[0];
    const { weatherDescription, weatherIcon } = getWeatherDetails(weather);
    const expectedResult = expectedResultTest2;
    expect(weatherDescription).toBe(expectedResult.weatherDescription);
    expect(weatherIcon).toBe(expectedResult.weatherIcon);
});

test("getWeatherDetails Test #3", () => {
    const weather = testData3.weather[0];
    const { weatherDescription, weatherIcon } = getWeatherDetails(weather);
    const expectedResult = expectedResultTest3;
    expect(weatherDescription).toBe(expectedResult.weatherDescription);
    expect(weatherIcon).toBe(expectedResult.weatherIcon);
});

test("getWeatherDetails Test #4", () => {
    const weather = testData4.weather[0];
    const { weatherDescription, weatherIcon } = getWeatherDetails(weather);
    const expectedResult = expectedResultTest4;
    expect(weatherDescription).toBe(expectedResult.weatherDescription);
    expect(weatherIcon).toBe(expectedResult.weatherIcon);
});
