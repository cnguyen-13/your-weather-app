import React, { useState, useEffect } from "react"
const { getMessage } = require("../../../HelperFunctions/getMessage")

function WelcomeMessage() {
	const [message, setMessage] = useState<string>("")

	const updateMessage = (): void => {
		const message: string = getMessage()
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

export default WelcomeMessage
