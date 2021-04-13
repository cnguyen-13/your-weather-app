import React from "react"
import backgroundImage from "../../images/intro-backgrounds/generic-city-drone-shot-evening.jpeg"
import ErrorMessage from "./error-page-components/ErrorMessage"
import { getStylesWithBg } from "../../functions/city-background-images/get-styles-city-page"

interface Props {
	invalidCityName: string
}

function ErrorPage(props: Props) {
	const { invalidCityName } = props
	const styles = getStylesWithBg(backgroundImage)

	return (
		<div className="txt-color-white height-error-page pt-3" style={styles}>
			<section className="max-width-centered flex-centered">
				<ErrorMessage invalidCityName={invalidCityName} />
			</section>
		</div>
	)
}

export default ErrorPage
