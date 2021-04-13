import React from "react"

interface Props {
	content: string
}

function ForecastCardDetail(props: Props) {
	const { content } = props

	return <p>{content}</p>
}

export default ForecastCardDetail
