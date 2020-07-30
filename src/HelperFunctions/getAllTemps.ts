interface dataArrayObject {
    label: string;
    data: string;
}

function getAllTemps(cityData: any, mSystem: string): dataArrayObject[] {
    const units = mSystem === "imperial" ? "°F" : "°C";
    const min: number = Math.round(cityData.temp.min);
    const max: number = Math.round(cityData.temp.max);
    const morning: number = Math.round(cityData.temp.morn);
    const day: number = Math.round(cityData.temp.day);
    const evening: number = Math.round(cityData.temp.eve);
    const night: number = Math.round(cityData.temp.night);
    return [
        { label: "Min", data: `${min} ${units}` },
        { label: "Max", data: `${max} ${units}` },
        { label: "Morning", data: `${morning} ${units}` },
        { label: "Day", data: `${day} ${units}` },
        { label: "Evening", data: `${evening} ${units}` },
        { label: "Night", data: `${night} ${units}` },
    ];
}

export { getAllTemps };
