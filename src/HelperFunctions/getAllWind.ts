function getAllWind(
    cityData: any,
    measurementSys: string
): { label: string; data: string }[] {
    const units: string = measurementSys === "imperial" ? "mph" : "m/s";
    const windSpeed: number = cityData.wind_speed;
    const windDegree: number = cityData.wind_deg;
    return [
        { label: "Degree", data: `${windDegree} °` },
        { label: "Speed", data: `${windSpeed} ${units}` },
    ];
}

export { getAllWind };
