import React, { useContext } from "react"
import BackgroundImagesContext from "../../BackgroundImagesContext"

interface Props {
	cityName: string
	countryName: string
}

function HeroBackground(props: Props) {
	const { cityName, countryName } = props
	const bgImage = useContext(BackgroundImagesContext)

	//Styles
	const styles = {
		backgroundSize: "cover",
		backgroundPosition: "center center",
		backgroundRepeat: "no-repeat",
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage[0]})`,
		backgroundAttachment: "fixed",
	}

	if (bgImage) {
		return (
			<section className="city-bg" style={styles}>
				<h2 className="city-title">
					City of {cityName}
					<span className="city-subtitle">, {countryName}</span>
				</h2>
			</section>
		)
	}

	return (
		<section className="city-bg">
			<h2 className="city-title">Loading...</h2>
		</section>
	)
}

export default HeroBackground
