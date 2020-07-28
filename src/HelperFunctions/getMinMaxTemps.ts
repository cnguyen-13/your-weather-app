interface Temps {
    min: number;
    max: number;
}
interface TempsReturnObject {
    minTemp: number;
    maxTemp: number;
}

function getMinMaxTemps(dataTemps: Temps): TempsReturnObject {
    const minTemp: number = Math.round(dataTemps.min);
    const maxTemp: number = Math.round(dataTemps.max);
    return { minTemp, maxTemp };
}

export { getMinMaxTemps };
