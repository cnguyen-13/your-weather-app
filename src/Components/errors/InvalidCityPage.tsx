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
		<div className="error-page" style={styles}>
			<div className="max-width-centered error-page-content">
				<h2 className="city-title error-title">
					"{invalidCityName}" is an
					<span className="error-color"> invalid City!</span>
				</h2>
			</div>
		</div>
	)
}

export default InvalidCityPage
