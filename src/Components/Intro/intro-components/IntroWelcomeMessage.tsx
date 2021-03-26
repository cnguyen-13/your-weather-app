import React, { useState, useEffect } from "react"
import { getGreeting } from "../../../functions/intro/get-greeting"

function IntroWelcomeMessage() {
	const [message, setMessage] = useState<string>("")

	const updateMessage = (): void => {
		const message: string = getGreeting()
		setMessage(message)
	}

	useEffect(() => {
		//First Moment
		updateMessage()

		const updateMessageInterval: NodeJS.Timeout = setInterval(() => {
			updateMessage()
		}, 3600000)

		return (): void => clearInterval(updateMessageInterval)
	}, [])
	return <>{message}, </>
}

export default IntroWelcomeMessage
