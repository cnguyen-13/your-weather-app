import React, { useState, useEffect } from "react"
import IntroLogo from "./intro-components/IntroLogo"
import IntroTime from "./intro-components/IntroTime"
import IntroWelcome from "./intro-components/IntroWelcome"
import IntroQuestion from "./intro-components/IntroQuestion"
import IntroForecastButton from "./intro-components/IntroForecastButton"
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
			<IntroLogo />
			<IntroTime />
			<IntroWelcome
				topic={LS.NAME}
				name={name}
				onChangeHandler={onChangeHandler}
				placeholder={INTRO_PLACEHOLDERS.NAME}
			/>
			<IntroQuestion
				topic={LS.CITY}
				city={city}
				onChangeHandler={onChangeHandler}
				placeholder={INTRO_PLACEHOLDERS.CITY}
			/>
			<IntroForecastButton city={city} />
		</div>
	)
}

export default Intro
