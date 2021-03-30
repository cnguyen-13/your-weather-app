import React, { useContext } from "react"
import BackgroundImagesContext from "../../../context/BackgroundImagesContext"
import { getStylesWithBg } from "../../../functions/city-background-images/get-styles-city-page"

//Use the styles function for background image
function DayForecastCityImage() {
	const cityImage = useContext(BackgroundImagesContext)[1]
	const styles = getStylesWithBg(cityImage)

	return <section className="day-forecast-city-image" style={styles}></section>
}

export default DayForecastCityImage
