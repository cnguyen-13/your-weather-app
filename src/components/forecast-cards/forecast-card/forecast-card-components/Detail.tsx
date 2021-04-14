import React from "react"

interface Props {
	content: string
}

function Detail(props: Props) {
	const { content } = props

	return <p>{content}</p>
}

export default Detail
