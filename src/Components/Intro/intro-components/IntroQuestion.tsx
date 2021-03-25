import React from "react"
import IntroTextInput from "./IntroTextInput"

interface Props {
	city: string
	topic: string
	onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void
}

function IntroQuestion(props: Props) {
	const { city, topic, onChangeHandler } = props

	return (
		<p className="intro-question">
			Want to Check the City of{" "}
			<IntroTextInput
				value={city}
				topic={topic}
				onChangeHandler={onChangeHandler}
			/>
			's Weather?
		</p>
	)
}

export default IntroQuestion
