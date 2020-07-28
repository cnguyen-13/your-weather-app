function getWeatherDetails(dataWeather: {
    description: string;
    icon: string;
}): { weatherDescription: string; weatherIcon: string } {
    const weatherDescription: string = dataWeather.description;
    const weatherIcon: string = dataWeather.icon;
    return { weatherDescription, weatherIcon };
}
export { getWeatherDetails };
