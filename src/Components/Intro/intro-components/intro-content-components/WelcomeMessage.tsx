import React, { useState, useEffect } from "react"
import { getGreeting } from "../../../../functions/intro/get-greeting"
import { MILLISECONDS_IN_HOUR } from "../../../../constants/intro/intro-milliseconds-times"

function WelcomeMessage() {
	const [message, setMessage] = useState<string>(getGreeting())

	useEffect(() => {
		const updateMessageInterval: NodeJS.Timeout = setInterval(() => {
			setMessage(getGreeting())
		}, MILLISECONDS_IN_HOUR)

		return (): void => clearInterval(updateMessageInterval)
	}, [])

	return <>{message}, </>
}

export default WelcomeMessage
