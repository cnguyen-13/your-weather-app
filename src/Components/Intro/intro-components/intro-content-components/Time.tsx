import React, { useState, useEffect } from "react"
import { getFormattedTime } from "../../../../functions/intro/get-formatted-time"
import { MILLISECONDS_IN_SECOND } from "../../../../constants/intro/intro-milliseconds-times"

function Time() {
	const [formattedTime, setFormattedTime] = useState<string>(getFormattedTime())

	//Updates time every second
	useEffect(() => {
		const updateTimeInterval: NodeJS.Timeout = setInterval(() => {
			setFormattedTime(getFormattedTime())
		}, MILLISECONDS_IN_SECOND)

		return (): void => clearInterval(updateTimeInterval)
	}, [])

	return <h1 className="fs-time">{formattedTime}</h1>
}

export default Time
