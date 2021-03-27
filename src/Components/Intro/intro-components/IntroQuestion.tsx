import React from "react"
import IntroUserInput from "./IntroUserInput"

interface Props {
	city: string
	topic: string
	placeholder: string
	onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void
}

function IntroQuestion(props: Props) {
	const { city, topic, placeholder, onChangeHandler } = props

	return (
		<p className="intro-question">
			Want to Check the City of{" "}
			<IntroUserInput
				value={city}
				topic={topic}
				onChangeHandler={onChangeHandler}
				placeholder={placeholder}
			/>
			's Weather?
		</p>
	)
}

export default IntroQuestion
