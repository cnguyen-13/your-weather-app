import React, { useContext } from "react"
import MeasurementSystemContext from "../../../context/MeasurementSystemContext"

function MSystemSwitch() {
	const { measurementSystem, toggleMeasurementSystem } = useContext(
		MeasurementSystemContext
	)

	return (
		<p>
			<img
				className="measurement-toggle"
				alt="Toggle Measurement System: "
				onClick={toggleMeasurementSystem}
			/>
		</p>
	)
}

export default MSystemSwitch
