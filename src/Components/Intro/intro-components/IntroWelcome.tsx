import React from "react"
import IntroWelcomeMessage from "./IntroWelcomeMessage"
import IntroUserInput from "./IntroUserInput"

interface Props {
	name: string
	topic: string
	placeholder: string
	onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void
}

function IntroWelcome(props: Props) {
	const { name, topic, placeholder, onChangeHandler } = props

	return (
		<h2 className="fs-welcome">
			<IntroWelcomeMessage />
			<IntroUserInput
				value={name}
				topic={topic}
				onChangeHandler={onChangeHandler}
				placeholder={placeholder}
			/>
		</h2>
	)
}

export default IntroWelcome
