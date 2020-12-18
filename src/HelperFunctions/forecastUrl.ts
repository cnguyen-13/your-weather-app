function forecastUrl(lat: number, lon: number, mSystem: string): string {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,current&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${mSystem}`;
}

export { forecastUrl };
