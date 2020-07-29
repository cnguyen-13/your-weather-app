const testData1 = {
    dt: 1596420000,
    sunrise: 1596397840,
    sunset: 1596447846,
    temp: {
        day: 87.31,
        min: 80.13,
        max: 87.82,
        night: 80.13,
        eve: 84.78,
        morn: 80.19,
    },
    feels_like: {
        day: 90.55,
        night: 84.22,
        eve: 85.62,
        morn: 84.85,
    },
    pressure: 1014,
    humidity: 51,
    dew_point: 67.51,
    wind_speed: 5.19,
    wind_deg: 139,
    weather: [
        {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
        },
    ],
    clouds: 100,
    pop: 0.51,
    uvi: 10.51,
};

const testData2 = {
    dt: 1596160800,
    sunrise: 1596138498,
    sunset: 1596188807,

    feels_like: {
        day: 81.9,
        night: 78.85,
        eve: 77.81,
        morn: 79.83,
    },
    pressure: 1014,
    humidity: 62,
    dew_point: 69.1,
    wind_speed: 14.9,
    wind_deg: 180,
    weather: [
        {
            id: 501,
            main: "Rain",
            description: "moderate rain",
            icon: "10d",
        },
    ],
    clouds: 97,
    pop: 0.74,
    rain: 3.58,
    uvi: 10.16,
};

const testData3 = {
    dt: 1595959200,
    sunrise: 1595936838,
    sunset: 1595986041,
    temp: {
        day: 35.09,
        min: 28.61,
        max: 35.09,
        night: 28.61,
        eve: 34.51,
        morn: 35.09,
    },
    feels_like: {
        day: 37.21,
        night: 30.34,
        eve: 37.05,
        morn: 37.21,
    },
    pressure: 1014,
    humidity: 44,
    dew_point: 21.01,
    wind_speed: 2.93,
    wind_deg: 252,
    weather: [
        {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
        },
    ],
    clouds: 75,
    pop: 0.72,
    rain: 2.94,
    uvi: 11.54,
};

const testData4 = {
    dt: 1596218400,
    sunrise: 1596196150,
    sunset: 1596245119,
    temp: {
        day: 35.29,
        min: 25.02,
        max: 37.89,
        night: 28.35,
        eve: 36.98,
        morn: 25.02,
    },
    feels_like: {
        day: 35.42,
        night: 31.21,
        eve: 36.47,
        morn: 26.03,
    },
    pressure: 1015,
    humidity: 34,
    dew_point: 17.24,
    wind_speed: 3.23,
    wind_deg: 237,
    weather: [
        {
            id: 500,
            main: "Rain",
            description: "light rain",
            icon: "10d",
        },
    ],
    clouds: 3,
    pop: 0.45,
    rain: 0.25,
    uvi: 11.42,
};

export { testData1, testData2, testData3, testData4 };
