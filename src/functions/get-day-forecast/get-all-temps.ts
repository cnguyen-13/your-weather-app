import { MS, MS_UNITS } from "../../constants/measurement-system"
import { TEMP_LABELS } from "../../constants/temp-labels"
import { labelsAndData, cityData, cityTemps } from "../../interface/city-data"

function roundedTempsValues(cityTemps: cityTemps): number[] {
	const { min, max, morn, day, eve, night } = cityTemps
	const temps: number[] = [min, max, morn, day, eve, night]
	const roundedTemps: number[] = temps.map(temp => {
		return Math.round(temp)
	})

	return roundedTemps
}

function getAllTemps(cityData: cityData, mSystem: string): labelsAndData[] {
	const units: string =
		mSystem === MS.IMPERIAL ? MS_UNITS.IMPERIAL.TEMP : MS_UNITS.METRIC.TEMP

	const roundedTemps: number[] = roundedTempsValues(cityData.temp)
	const labelsAndData: labelsAndData[] = roundedTemps.map((temp, idx) => {
		const label: string = TEMP_LABELS[idx]

		return {
			label: label,
			data: `${temp} ${units}`,
		}
	})

	return labelsAndData
}

export { getAllTemps }
