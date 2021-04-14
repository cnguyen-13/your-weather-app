import { MS, MS_UNITS } from "../../constants/day-forecast/measurement-system"
import { TEMP_LABELS } from "../../constants/day-forecast/temp-labels"
import { forecastDay } from "../../interface/interfaces"

interface labelsAndData {
	label: string
	data: string
}

interface temps {
	day: number
	eve: number
	max: number
	min: number
	morn: number
	night: number
}

function roundedTempsValues(cityTemps: temps): number[] {
	const { min, max, morn, day, eve, night } = cityTemps
	const temps: number[] = [min, max, morn, day, eve, night]
	const roundedTemps: number[] = temps.map(temp => {
		return Math.round(temp)
	})

	return roundedTemps
}

function getAllTemps(cityData: forecastDay, mSystem: string): labelsAndData[] {
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
