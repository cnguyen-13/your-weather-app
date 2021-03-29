import React, { useContext } from "react"
import BackgroundImagesContext from "../../../context/BackgroundImagesContext"
interface Props {
	city: string
}

function DayForecastCityImage(props: Props) {
	const { city } = props
	const cityImage = useContext(BackgroundImagesContext)[1]

	return (
		<section className="city-image">
			<img src={cityImage} alt={`City of ${city}`} />
		</section>
	)
}

export default DayForecastCityImage
