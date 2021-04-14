import React from "react"
import Logo from "./intro-content-components/Logo"
import Time from "./intro-content-components/Time"
import Welcome from "./intro-content-components/Welcome"
import Question from "./intro-content-components/Question"
import ForecastButton from "./intro-content-components/ForecastButton"

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
