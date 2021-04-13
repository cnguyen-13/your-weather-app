import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Hero from "./Hero"
import ForecastCards from "../forecast-cards/ForecastCards"
import ErrorPage from "../errors/ErrorPage"
import BackgroundImagesContext from "../../context/BackgroundImagesContext"
import {
	getCountryName,
	getBgImages,
} from "../../functions/get-country-name-and-images"

interface Params {
	cityParam: string
}

function CityPage() {
	const { cityParam } = useParams<Params>()
	const [countryName, setCountryName] = useState<string>("")
	const [bgImages, setBgImages] = useState([])
	const [isInvalidCity, setIsInvalidCity] = useState<boolean>(false)

	useEffect(() => {
		//Resets so that the new cityParam has a chance of being valid
		setIsInvalidCity(false)
		getCountryName(setCountryName, setIsInvalidCity, cityParam)
		getBgImages(setBgImages, cityParam)
	}, [cityParam])

	if (isInvalidCity) {
		return <ErrorPage invalidCityName={cityParam.toUpperCase()} />
	}

	return (
		<BackgroundImagesContext.Provider value={bgImages}>
			<Hero cityName={cityParam.toUpperCase()} countryName={countryName} />
			<ForecastCards city={cityParam} />
		</BackgroundImagesContext.Provider>
	)
}

export default CityPage
