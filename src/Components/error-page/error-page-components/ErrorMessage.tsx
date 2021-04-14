import React from "react"

interface Props {
	invalidCityName: string
}

function ErrorMessage(props: Props) {
	const { invalidCityName } = props

	return (
		<h2 className="fs-lg fw-normal text-centered">
			"{invalidCityName}" is an
			<span className="txt-color-error"> invalid City!</span>
		</h2>
	)
}

export default ErrorMessage
