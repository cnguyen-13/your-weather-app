import { MS, MS_UNITS } from "../../constants/measurement-system"

interface Temps {
	min: number
	max: number
}

interface TempsReturnObject {
	minTemp: string
	maxTemp: string
}

function getMinMaxTemps(dataTemps: Temps, mSystem: string): TempsReturnObject {
	const units =
		mSystem === MS.IMPERIAL ? MS_UNITS.IMPERIAL.TEMP : MS_UNITS.METRIC.TEMP

	const { min, max } = dataTemps
	const roundedMinTemp: number = Math.round(min)
	const roundedMaxTemp: number = Math.round(max)

	return {
		minTemp: `${roundedMinTemp} ${units}`,
		maxTemp: `${roundedMaxTemp} ${units}`,
	}
}

export { getMinMaxTemps }
