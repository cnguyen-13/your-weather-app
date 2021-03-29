import { MS, MS_UNITS } from "../../constants/day-forecast/measurement-system"
import { WIND_LABELS } from "../../constants/day-forecast/wind-labels"
import { forecastDay, labelsAndData } from "../../interface/interfaces"

function getAllWind(cityData: forecastDay, mSystem: string): labelsAndData[] {
	const units: string =
		mSystem === MS.IMPERIAL
			? MS_UNITS.IMPERIAL.WIND_SPEED
			: MS_UNITS.METRIC.WIND_SPEED

	const { wind_deg, wind_speed } = cityData
	const data: number[] = [wind_deg, wind_speed]

	const labelsAndData: labelsAndData[] = data.map((data, idx) => {
		const label = WIND_LABELS[idx]
		const dataString = idx === 0 ? `${data} °` : `${data} ${units}`
		return {
			label: label,
			data: dataString,
		}
	})

	return labelsAndData
}

export { getAllWind }
