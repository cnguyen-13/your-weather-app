const { forecastUrl } = require("../../HelperFunctions/forecastUrl");

test("forecastUrl Function Testing", () => {
    expect(forecastUrl(50, 20, "imperial")).toBe(
        `https://api.openweathermap.org/data/2.5/onecall?lat=50&lon=20&exclude=minutely,hourly,current&appid={process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
    );

    expect(forecastUrl(-92.22, 15.92, "imperial")).toBe(
        `https://api.openweathermap.org/data/2.5/onecall?lat=-92.22&lon=15.92&exclude=minutely,hourly,current&appid={process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
    );

    expect(forecastUrl(-10.46, 42.81, "metric")).toBe(
        `https://api.openweathermap.org/data/2.5/onecall?lat=-10.46&lon=42.81&exclude=minutely,hourly,current&appid={process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );

    expect(forecastUrl(152.99, -20.16, "metric")).toBe(
        `https://api.openweathermap.org/data/2.5/onecall?lat=152.99&lon=-20.16&exclude=minutely,hourly,current&appid={process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
});
