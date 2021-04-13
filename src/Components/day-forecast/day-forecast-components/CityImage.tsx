import React, { useContext } from "react"
import BackgroundImagesContext from "../../../context/BackgroundImagesContext"
import { getStylesWithBg } from "../../../functions/city-background-images/get-styles-city-page"

interface Props {
	breakpointClass: string
}

function CityImage(props: Props) {
	const { breakpointClass } = props
	const cityImage = useContext(BackgroundImagesContext)[1]
	const styles = getStylesWithBg(cityImage)

	return (
		<div
			className={`dimen-df-city-img df-flex-item-60 ${breakpointClass}`}
			style={styles}
		></div>
	)
}

export default CityImage
