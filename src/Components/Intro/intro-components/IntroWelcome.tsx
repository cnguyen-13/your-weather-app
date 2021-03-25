import React from "react"
import WelcomeMessage from "./IntroWelcomeMessage"
import TextInput from "./IntroTextInput"

interface Props {
	name: string
	topic: string
	onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Welcome(props: Props) {
	const { name, topic, onChangeHandler } = props

	return (
		<h2 className="intro-welcome">
			<WelcomeMessage />
			<TextInput value={name} topic={topic} onChangeHandler={onChangeHandler} />
		</h2>
	)
}

export default Welcome
