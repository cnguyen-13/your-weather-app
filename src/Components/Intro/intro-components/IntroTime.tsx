import React, { useState, useEffect } from "react"
import { getFormattedTime } from "../../../functions/get-formatted-time"

function Time() {
	const [formattedTime, setFormattedTime] = useState<string>("")

	const updateTime = (): void => {
		const formattedTime: string = getFormattedTime()
		setFormattedTime(formattedTime)
	}

	useEffect(() => {
		//First Tick
		updateTime()

		const updateTimeInterval: NodeJS.Timeout = setInterval(() => {
			updateTime()
		}, 1000)

		return (): void => clearInterval(updateTimeInterval)
	}, [])

	return <h1 className="intro-time">{formattedTime}</h1>
}

export default Time
