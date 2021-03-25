import React from "react"
import error from "../../images/misc/error.png"

interface Props {
	invalidCityName: string
}

function InvalidCityPage(props: Props) {
	const { invalidCityName } = props

	return (
		<div className="error-page">
			<img src={error} alt="Sad face" />
			<h2 className="city-title error-title">
				{invalidCityName} is an
				<span className="error"> invalid City!</span>
			</h2>
		</div>
	)
}

export default InvalidCityPage
