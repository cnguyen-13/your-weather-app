import React from "react"

interface Props {
	cityName: string
	countryName: string
}

function CityTitle(props: Props) {
	const { cityName, countryName } = props

	return (
		<h2 className="fs-lg txt-color-white fw-thin max-width-centered">
			City of {cityName}
			<span className="fs-med">, {countryName}</span>
		</h2>
	)
}

export default CityTitle
