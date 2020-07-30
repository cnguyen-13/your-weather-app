const apiKeyWeather = `065cf514db0debfd884bf32efd0de162`;

function forecastUrl(lat: number, lon: number, mSystem: string): string {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,current&appid=${apiKeyWeather}&units=${mSystem}`;
}

export { forecastUrl };
