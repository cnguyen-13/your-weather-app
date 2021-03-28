import React, { useContext } from "react"
import BackgroundImagesContext from "../../context/BackgroundImagesContext"
import { getStylesWithBg } from "../../functions/city-background-images/get-styles-city-page"

interface Props {
	cityName: string
	countryName: string
}

function HeroBackground(props: Props) {
	const { cityName, countryName } = props
	const [bgImage] = useContext(BackgroundImagesContext)

	return (
		<section className="city-bg" style={getStylesWithBg(bgImage)}>
			<h2 className="city-title">
				City of {cityName}
				<span className="city-subtitle">, {countryName}</span>
			</h2>
		</section>
	)
}

export default HeroBackground
