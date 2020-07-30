const apiKeyWeather = `065cf514db0debfd884bf32efd0de162`;

function coordinatesUrl(city: string): string {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKeyWeather}`;
}

export { coordinatesUrl };
