import React, { useState, useEffect } from "react"
import IntroContent from "./intro-components/IntroContent"
import { getBackgroundClass } from "../../functions/intro/get-background-class"
import { MILLISECONDS_IN_HOUR } from "../../constants/intro/intro-milliseconds-times"
import { INTRO_PLACEHOLDERS } from "../../constants/intro/intro-input-placeholders"
import { LS } from "../../constants/intro/intro-ls"

function Intro() {
	const [name, setName] = useState<string>(localStorage.getItem(LS.NAME) || "")
	const [city, setCity] = useState<string>(localStorage.getItem(LS.CITY) || "")
	const [bgClass, setBgClass] = useState<string>(getBackgroundClass())

	//Update local storage variables
	function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
		const { id, value } = e.target
		localStorage.setItem(id, value)
		id === LS.NAME ? setName(value) : setCity(value)
	}

	//Changes Background class every hour
	useEffect(() => {
		const bgClassUpdateInterval: NodeJS.Timeout = setInterval((): void => {
			setBgClass(getBackgroundClass())
		}, MILLISECONDS_IN_HOUR)

		return (): void => clearInterval(bgClassUpdateInterval)
	}, [])

	return (
		<div
			className={`intro-layout gap-lg text-centered flex-centered full-width full-height txt-color-white ${bgClass}`}
		>
			<IntroContent
				nameTopic={LS.NAME}
				name={name}
				namePlaceHolder={INTRO_PLACEHOLDERS.NAME}
				cityTopic={LS.CITY}
				city={city}
				cityPlaceHolder={INTRO_PLACEHOLDERS.CITY}
				onChangeHandler={onChangeHandler}
			/>
		</div>
	)
}

export default Intro
