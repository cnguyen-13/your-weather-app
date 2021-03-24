import React from "react"
import TextInput from "./TextInput"

interface Props {
	city: string
	topic: string
	onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void
}

function Question(props: Props) {
	const { city, topic, onChangeHandler } = props

	return (
		<p className="intro-question">
			Want to Check the City of{" "}
			<TextInput value={city} topic={topic} onChangeHandler={onChangeHandler} />
			's Weather?
		</p>
	)
}

export default Question
