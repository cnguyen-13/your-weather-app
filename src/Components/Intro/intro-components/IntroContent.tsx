import React from "react"
import Logo from "./Logo"
import Time from "./Time"
import Welcome from "./Welcome"
import Question from "./Question"
import ForecastButton from "./ForecastButton"

interface Props {
	nameTopic: string
	name: string
	namePlaceHolder: string
	cityTopic: string
	city: string
	cityPlaceHolder: string
	onChangeHandler: any
}

function IntroContent(props: Props) {
	const {
		nameTopic,
		cityTopic,
		name,
		city,
		namePlaceHolder,
		cityPlaceHolder,
		onChangeHandler,
	} = props

	return (
		<>
			<Logo />
			<Time />
			<Welcome
				topic={nameTopic}
				name={name}
				onChangeHandler={onChangeHandler}
				placeholder={namePlaceHolder}
			/>
			<Question
				topic={cityTopic}
				city={city}
				onChangeHandler={onChangeHandler}
				placeholder={cityPlaceHolder}
			/>
			<ForecastButton city={city} />
		</>
	)
}

export default IntroContent
