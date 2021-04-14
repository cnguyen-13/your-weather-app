import React, { useContext } from "react"
import CityTitle from "./hero-components/CityTitle"
import BackgroundImagesContext from "../../../context/BackgroundImagesContext"
import { getStylesWithBg } from "../../../functions/city-background-images/get-styles-city-page"

interface Props {
	cityName: string
	countryName: string
}

function Hero(props: Props) {
	const { cityName, countryName } = props
	const [bgImage] = useContext(BackgroundImagesContext)

	return (
		<section className="dimen-city-bg pt-3" style={getStylesWithBg(bgImage)}>
			<CityTitle cityName={cityName} countryName={countryName} />
		</section>
	)
}

export default Hero
