import React, { useContext } from "react"
import MeasurementSystemContext from "../../../MeasurementSystemContext"
import imperial from "../../../images/misc/farenheit.png"
import metric from "../../../images/misc/celsius.png"

function MSystemSwitch() {
	const { measurementSystem, toggleMeasurementSystem } = useContext(
		MeasurementSystemContext
	)

	return (
		<p>
			<img
				className="measurement-toggle"
				src={measurementSystem === "imperial" ? imperial : metric}
				alt="Toggle Measurement System: "
				onClick={toggleMeasurementSystem}
			/>
		</p>
	)
}

export default MSystemSwitch
