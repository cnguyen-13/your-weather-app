function getAllWeather(cityData: any): { label: string; data: string }[] {
    const humidity: number = cityData.humidity;
    const pop: number = cityData.pop * 100;
    const clouds: number = cityData.clouds;
    const uvIndex: number = cityData.uvi;
    return [
        { label: "Humidity", data: `${humidity} %` },
        { label: "Chance of Precipitation", data: `${pop} %` },
        { label: "Cloudiness", data: `${clouds} %` },
        { label: "UV Index", data: `${uvIndex}` },
    ];
}

export { getAllWeather };
