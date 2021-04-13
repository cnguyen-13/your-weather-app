import React from "react"
import { Link } from "react-router-dom"

interface Props {
	city: string
	clearInput(): void
}

function NavBarSearchButton(props: Props) {
	const { city, clearInput } = props
	//Make sure this component has an actual input

	return (
		<Link
			to={`/${city}`}
			onClick={clearInput}
			className="dimen-search-btn p-search-btn text-centered txt-color-white bg-color-primary clickable"
		>
			Search
		</Link>
	)
}

export default NavBarSearchButton
