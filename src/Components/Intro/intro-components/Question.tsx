import React from "react"
import UserInput from "./UserInput"

interface Props {
	city: string
	topic: string
	placeholder: string
	onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void
}

function Question(props: Props) {
	const { city, topic, placeholder, onChangeHandler } = props

	return (
		<p className="fs-question">
			Want to Check the City of{" "}
			<UserInput
				value={city}
				topic={topic}
				onChangeHandler={onChangeHandler}
				placeholder={placeholder}
			/>
			's Weather?
		</p>
	)
}

export default Question
