import React, { useState, useEffect } from "react"
import Logo from "./intro-components/IntroLogo"
import Time from "./intro-components/IntroTime"
import Welcome from "./intro-components/IntroWelcome"
import Question from "./intro-components/IntroQuestion"
import GetWeatherButton from "./intro-components/IntroForecastButton"
import { getBackgroundClass } from "../../functions/get-background-class"

function Intro() {
	const [name, setName] = useState<string>(localStorage.getItem("name") || "")
	const [city, setCity] = useState<string>(localStorage.getItem("city") || "")
	const [bgClass, setBgClass] = useState<string>("")

	//Gets background image to use
	const updateBg = (): void => {
		const today: Date = new Date()
		const hours: number = today.getHours()
		const className: string = getBackgroundClass(hours)
		setBgClass(className)
	}

	//Update local storage variables
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { id, value } = e.target
		if (id === "name") {
			localStorage.setItem("name", value)
			setName(value)
		} else {
			localStorage.setItem("city", value)
			setCity(value)
		}
	}

	useEffect(() => {
		//Initial Background image
		updateBg()

		const timeUpdateInterval: NodeJS.Timeout = setInterval((): void => {
			updateBg()
		}, 3600000)

		return (): void => clearInterval(timeUpdateInterval)
	}, [])

	return (
		<div id="intro" className={`intro ${bgClass}`}>
			<Logo />
			<Time />
			<Welcome topic="name" name={name} onChangeHandler={onChangeHandler} />
			<Question topic="city" city={city} onChangeHandler={onChangeHandler} />
			<GetWeatherButton city={city} />
		</div>
	)
}

export default Intro
