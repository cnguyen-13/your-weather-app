import React, { useEffect } from "react"
import { changeInputFieldWidth } from "../../../functions/intro/change-input-field-width"
import { INTRO_TEXT_INPUT_STYLES } from "../../../constants/intro/intro-text-input-styles"

interface Props {
	value: string
	topic: string
	placeholder: string
	onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void
}

function UserInput(props: Props) {
	const { value, topic, placeholder, onChangeHandler } = props

	useEffect(() => {
		changeInputFieldWidth(topic)
	}, [value, topic])

	return (
		<input
			id={topic}
			className="txt-color-error"
			style={INTRO_TEXT_INPUT_STYLES}
			type="text"
			onChange={onChangeHandler}
			value={value}
			placeholder={placeholder}
		/>
	)
}

export default UserInput
