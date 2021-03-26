import { MS, MS_UNITS } from "../../constants/measurement-system"
import { WIND_LABELS } from "../../constants/wind-labels"
import { cityData, labelsAndData } from "../../interface/city-data"

function getAllWind(cityData: cityData, mSystem: string): labelsAndData[] {
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
