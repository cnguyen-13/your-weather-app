interface DataWeather {
    description: string;
    icon: string;
}

interface ReturnWeatherObject {
    weatherDescription: string;
    weatherIcon: string;
}

function getWeatherDetails(dataWeather: DataWeather): ReturnWeatherObject {
    const weatherDescription: string = dataWeather.description;
    const weatherIcon: string = dataWeather.icon;
    return { weatherDescription, weatherIcon };
}
export { getWeatherDetails };
