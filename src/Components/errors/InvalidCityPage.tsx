import React from "react"
import backgroundImage from "../../images/intro-backgrounds/generic-city-drone-shot-evening.jpeg"
import { getStylesWithBg } from "../../functions/city-background-images/get-styles-city-page"

interface Props {
	invalidCityName: string
}

function InvalidCityPage(props: Props) {
	const { invalidCityName } = props
	const styles = getStylesWithBg(backgroundImage)
	return (
		<div className="txt-color-white height-error-page pt-3" style={styles}>
			<div className="max-width-centered flex-centered text-centered">
				<h2 className="fs-lg fw-normal">
					"{invalidCityName}" is an
					<span className="txt-color-error"> invalid City!</span>
				</h2>
			</div>
		</div>
	)
}

export default InvalidCityPage
