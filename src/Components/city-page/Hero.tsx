import React, { useContext } from "react"
import BackgroundImagesContext from "../../context/BackgroundImagesContext"
import { getStylesWithBg } from "../../functions/city-background-images/get-styles-city-page"

interface Props {
	cityName: string
	countryName: string
}

function Hero(props: Props) {
	const { cityName, countryName } = props
	const [bgImage] = useContext(BackgroundImagesContext)

	return (
		<section className="dimen-city-bg pt-3" style={getStylesWithBg(bgImage)}>
			<h2 className="fs-lg txt-color-white fw-thin max-width-centered">
				City of {cityName}
				<span className="fs-med">, {countryName}</span>
			</h2>
		</section>
	)
}

export default Hero
