function getMinMaxTemps(dataTemps: {
    min: number;
    max: number;
}): { minTemp: number; maxTemp: number } {
    const minTemp: number = Math.round(dataTemps.min);
    const maxTemp: number = Math.round(dataTemps.max);
    return { minTemp, maxTemp };
}

export { getMinMaxTemps };
