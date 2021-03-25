import React from "react"
import IntroWelcomeMessage from "./IntroWelcomeMessage"
import IntroTextInput from "./IntroTextInput"

interface Props {
	name: string
	topic: string
	onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Welcome(props: Props) {
	const { name, topic, onChangeHandler } = props

	return (
		<h2 className="intro-welcome">
			<IntroWelcomeMessage />
			<IntroTextInput
				value={name}
				topic={topic}
				onChangeHandler={onChangeHandler}
			/>
		</h2>
	)
}

export default Welcome
