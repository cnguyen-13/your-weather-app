import React, { useContext } from "react"
import MeasurementSystemContext from "../../../context/MeasurementSystemContext"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import { MS } from "../../../constants/day-forecast/measurement-system"

function MeasurementSwitch() {
	const { measurementSystem, toggleMeasurementSystem } = useContext(
		MeasurementSystemContext
	)

	const isMetric = measurementSystem === MS.METRIC

	return (
		<FormControlLabel
			control={
				<Switch
					checked={isMetric ? true : false}
					onChange={toggleMeasurementSystem}
				/>
			}
			label={isMetric ? MS.METRIC : MS.IMPERIAL}
		/>
	)
}

export default MeasurementSwitch
