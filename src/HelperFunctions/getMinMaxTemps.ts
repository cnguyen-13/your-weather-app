interface Temps {
    min: number;
    max: number;
}

interface TempsReturnObject {
    minTemp: string;
    maxTemp: string;
}

function getMinMaxTemps(dataTemps: Temps, mSystem: string): TempsReturnObject {
    const units = mSystem === "imperial" ? "°F" : "°C";
    const minTemp: number = Math.round(dataTemps.min);
    const maxTemp: number = Math.round(dataTemps.max);
    return { minTemp: `${minTemp} ${units}`, maxTemp: `${maxTemp} ${units}` };
}

export { getMinMaxTemps };
