import React from "react"
import { getIcon } from "../../../functions/forecast-cards/get-icon"

interface Props {
	category: string
}

function Icon(props: Props) {
	const { category } = props
	const icon: string = getIcon(category)

	return <img className="dimen-df-icon mb-1-and-a-half" src={icon} alt="" />
}

export default Icon
