import React from "react"
import WelcomeMessage from "./WelcomeMessage"
import UserInput from "./UserInput"

interface Props {
	name: string
	topic: string
	placeholder: string
	onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void
}

function Welcome(props: Props) {
	const { name, topic, placeholder, onChangeHandler } = props

	return (
		<h2 className="fs-welcome">
			<WelcomeMessage />
			<UserInput
				value={name}
				topic={topic}
				onChangeHandler={onChangeHandler}
				placeholder={placeholder}
			/>
		</h2>
	)
}

export default Welcome
